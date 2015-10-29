﻿//-----------------------------------------------------------------------
// <copyright file="WebApiToSwaggerGenerator.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using NJsonSchema;
using NJsonSchema.Infrastructure;
using NSwag.CodeGeneration.Infrastructure;

namespace NSwag.CodeGeneration.SwaggerGenerators.WebApi
{
    /// <summary>Generates a <see cref="SwaggerService"/> object for the given Web API class type. </summary>
    public class WebApiToSwaggerGenerator
    {
        private readonly string _defaultRouteTemplate;

        /// <summary>Initializes a new instance of the <see cref="WebApiToSwaggerGenerator" /> class.</summary>
        /// <param name="defaultRouteTemplate">The default route template.</param>
        public WebApiToSwaggerGenerator(string defaultRouteTemplate) : this (defaultRouteTemplate, new JsonSchemaGeneratorSettings())
        {
        }

        /// <summary>Initializes a new instance of the <see cref="WebApiToSwaggerGenerator" /> class.</summary>
        /// <param name="defaultRouteTemplate">The default route template.</param>
        /// <param name="jsonSchemaGeneratorSettings">The JSON Schema generator settings.</param>
        public WebApiToSwaggerGenerator(string defaultRouteTemplate, JsonSchemaGeneratorSettings jsonSchemaGeneratorSettings)
        {
            _defaultRouteTemplate = defaultRouteTemplate;
            JsonSchemaGeneratorSettings = jsonSchemaGeneratorSettings; 
        }

        /// <summary>Gets or sets the JSON Schema generator settings.</summary>
        public JsonSchemaGeneratorSettings JsonSchemaGeneratorSettings { get; set; }
        
        /// <summary>Generates a Swagger specification for the given controller type.</summary>
        /// <typeparam name="TController">The type of the controller.</typeparam>
        /// <param name="excludedMethodName">The name of the excluded method name.</param>
        /// <returns>The <see cref="SwaggerService" />.</returns>
        /// <exception cref="InvalidOperationException">The parameter cannot be an object or array.</exception>
        public SwaggerService GenerateForController<TController>(string excludedMethodName = "Swagger")
        {
            return GenerateForController(typeof(TController), excludedMethodName);
        }

        /// <summary>Generates a Swagger specification for the given controller type.</summary>
        /// <param name="controllerType">The type of the controller.</param>
        /// <param name="excludedMethodName">The name of the excluded method name.</param>
        /// <returns>The <see cref="SwaggerService" />.</returns>
        /// <exception cref="InvalidOperationException">The parameter cannot be an object or array.</exception>
        public SwaggerService GenerateForController(Type controllerType, string excludedMethodName = "Swagger")
        {
            var service = new SwaggerService();
            var schemaResolver = new SchemaResolver();

            GenerateForController(service, controllerType, excludedMethodName, schemaResolver);

            service.GenerateOperationIds();
            return service;
        }

        /// <summary>Generates a Swagger specification for the given controller types.</summary>
        /// <param name="controllerTypes">The types of the controller.</param>
        /// <param name="excludedMethodName">The name of the excluded method name.</param>
        /// <returns>The <see cref="SwaggerService" />.</returns>
        /// <exception cref="InvalidOperationException">The parameter cannot be an object or array.</exception>
        public SwaggerService GenerateForControllers(Type[] controllerTypes, string excludedMethodName = "Swagger")
        {
            var service = new SwaggerService();
            var schemaResolver = new SchemaResolver();

            foreach (var controllerType in controllerTypes)
                GenerateForController(service, controllerType, excludedMethodName, schemaResolver);

            service.GenerateOperationIds();
            return service;
        }

        /// <exception cref="InvalidOperationException">The parameter cannot be an object or array.</exception>
        private void GenerateForController(SwaggerService service, Type controllerType, string excludedMethodName, SchemaResolver schemaResolver)
        {
            var methods = controllerType.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly);
            foreach (var method in methods.Where(m => m.Name != excludedMethodName))
            {
                var parameters = method.GetParameters().ToList();
                var methodName = method.Name;

                var operation = new SwaggerOperation();
                operation.OperationId = methodName;

                var httpPath = GetHttpPath(service, operation, controllerType, method, parameters, schemaResolver);

                LoadParameters(service, operation, parameters, schemaResolver);
                LoadReturnType(service, operation, method, schemaResolver);
                LoadMetaData(operation, method);

                foreach (var httpMethod in GetSupportedHttpMethods(method))
                {
                    if (!service.Paths.ContainsKey(httpPath))
                    {
                        var path = new SwaggerOperations();
                        service.Paths[httpPath] = path;
                    }

                    service.Paths[httpPath][httpMethod] = operation;
                }
            }

            foreach (var schema in schemaResolver.Schemes)
                service.Definitions[schema.TypeName] = schema;
        }

        private void LoadMetaData(SwaggerOperation operation, MethodInfo method)
        {
            dynamic descriptionAttribute = method.GetCustomAttributes()
                .SingleOrDefault(a => a.GetType().Name == "DescriptionAttribute");

            if (descriptionAttribute != null)
                operation.Summary = descriptionAttribute.Description;
            else
            {
                var summary = method.GetXmlDocumentation();
                if (summary != string.Empty)
                    operation.Summary = summary;
            }
        }

        private string GetHttpPath(SwaggerService service, SwaggerOperation operation, Type controllerType, MethodInfo method, List<ParameterInfo> parameters, ISchemaResolver schemaResolver)
        {
            string httpPath;

            dynamic routeAttribute = method.GetCustomAttributes()
                .SingleOrDefault(a => a.GetType().Name == "RouteAttribute");

            if (routeAttribute != null)
            {
                dynamic routePrefixAttribute = controllerType.GetCustomAttributes()
                    .SingleOrDefault(a => a.GetType().Name == "RoutePrefixAttribute");

                if (routePrefixAttribute != null)
                    httpPath = routePrefixAttribute.Prefix + "/" + routeAttribute.Template;
                else
                    httpPath = routeAttribute.Template;
            }
            else
            {
                var actionName = GetActionName(method);
                httpPath = _defaultRouteTemplate
                    .Replace("{controller}", controllerType.Name.Replace("Controller", string.Empty))
                    .Replace("{action}", actionName);
            }

            foreach (var match in Regex.Matches(httpPath, "\\{(.*?)\\}").OfType<Match>())
            {
                var parameterName = match.Groups[1].Value.Split(':').First(); // first segment is parameter name in constrained route (e.g. "[Route("users/{id:int}"]")
                var parameter = parameters.SingleOrDefault(p => p.Name == parameterName);
                if (parameter != null)
                {
                    var operationParameter = CreatePrimitiveParameter(service, parameter, schemaResolver);
                    operationParameter.Kind = SwaggerParameterKind.Path;

                    operation.Parameters.Add(operationParameter);
                    parameters.Remove(parameter);
                }
                else
                {
                    httpPath = httpPath
                        .Replace(match.Value, string.Empty)
                        .Replace("//", "/")
                        .Trim('/');
                }
            }

            return httpPath;
        }

        private string GetActionName(MethodInfo method)
        {
            dynamic actionNameAttribute = method.GetCustomAttributes()
                .SingleOrDefault(a => a.GetType().Name == "ActionNameAttribute");

            if (actionNameAttribute != null)
                return actionNameAttribute.Name;

            return method.Name;
        }

        private IEnumerable<SwaggerOperationMethod> GetSupportedHttpMethods(MethodInfo method)
        {
            // See http://www.asp.net/web-api/overview/web-api-routing-and-actions/routing-in-aspnet-web-api

            var actionName = GetActionName(method);

            var httpMethods = GetSupportedHttpMethodsFromAttributes(method).ToArray();
            foreach (var httpMethod in httpMethods)
                yield return httpMethod;

            if (httpMethods.Length == 0)
            {
                if (actionName.StartsWith("Get"))
                    yield return SwaggerOperationMethod.Get;
                else if (actionName.StartsWith("Post"))
                    yield return SwaggerOperationMethod.Post;
                else if (actionName.StartsWith("Put"))
                    yield return SwaggerOperationMethod.Put;
                else if (actionName.StartsWith("Delete"))
                    yield return SwaggerOperationMethod.Delete;
                else
                    yield return SwaggerOperationMethod.Post;
            }
        }

        private IEnumerable<SwaggerOperationMethod> GetSupportedHttpMethodsFromAttributes(MethodInfo method)
        {
            if (method.GetCustomAttributes().Any(a => a.GetType().Name == "HttpGetAttribute"))
                yield return SwaggerOperationMethod.Get;

            if (method.GetCustomAttributes().Any(a => a.GetType().Name == "HttpPostAttribute"))
                yield return SwaggerOperationMethod.Post;

            if (method.GetCustomAttributes().Any(a => a.GetType().Name == "HttpPutAttribute"))
                yield return SwaggerOperationMethod.Put;

            if (method.GetCustomAttributes().Any(a => a.GetType().Name == "HttpDeleteAttribute"))
                yield return SwaggerOperationMethod.Delete;

            if (method.GetCustomAttributes().Any(a => a.GetType().Name == "HttpOptionsAttribute"))
                yield return SwaggerOperationMethod.Options;

            dynamic acceptVerbsAttribute = method.GetCustomAttributes()
                .SingleOrDefault(a => a.GetType().Name == "AcceptVerbsAttribute");

            if (acceptVerbsAttribute != null)
            {
                foreach (var verb in ((ICollection<string>)acceptVerbsAttribute.Verbs).Select(v => v.ToLowerInvariant()))
                {
                    if (verb == "get")
                        yield return SwaggerOperationMethod.Get;
                    else if (verb == "post")
                        yield return SwaggerOperationMethod.Post;
                    else if (verb == "put")
                        yield return SwaggerOperationMethod.Put;
                    else if (verb == "delete")
                        yield return SwaggerOperationMethod.Delete;
                    else if (verb == "options")
                        yield return SwaggerOperationMethod.Options;
                    else if (verb == "head")
                        yield return SwaggerOperationMethod.Head;
                    else if (verb == "patch")
                        yield return SwaggerOperationMethod.Patch;
                }
            }
        }

        /// <exception cref="InvalidOperationException">The parameter cannot be an object or array. </exception>
        private void LoadParameters(SwaggerService service, SwaggerOperation operation, List<ParameterInfo> parameters, ISchemaResolver schemaResolver)
        {
            foreach (var parameter in parameters)
            {
                dynamic fromBodyAttribute = parameter.GetCustomAttributes()
                    .SingleOrDefault(a => a.GetType().Name == "FromBodyAttribute");

                if (fromBodyAttribute != null)
                {
                    var operationParameter = CreateBodyParameter(service, parameter, schemaResolver);
                    operation.Parameters.Add(operationParameter);
                }
                else
                {
                    var info = JsonObjectTypeDescription.FromType(parameter.ParameterType);
                    if (info.Type.HasFlag(JsonObjectType.Object) || info.Type.HasFlag(JsonObjectType.Array))
                    {
                        if (operation.Parameters.Any(p => p.Kind == SwaggerParameterKind.Body))
                            throw new InvalidOperationException("The parameter '" + parameter.Name + "' cannot be an object or array. ");

                        var operationParameter = CreateBodyParameter(service, parameter, schemaResolver);
                        operation.Parameters.Add(operationParameter);
                    }
                    else
                    {
                        var operationParameter = CreatePrimitiveParameter(service, parameter, schemaResolver);
                        operationParameter.Kind = SwaggerParameterKind.Query;

                        operation.Parameters.Add(operationParameter);
                    }
                }
            }
        }

        private SwaggerParameter CreateBodyParameter(SwaggerService service, ParameterInfo parameter, ISchemaResolver schemaResolver)
        {
            var operationParameter = new SwaggerParameter();
            operationParameter.Schema = CreateAndAddSchema<SwaggerParameter>(service, parameter.ParameterType, schemaResolver);
            operationParameter.Name = "request";
            operationParameter.Kind = SwaggerParameterKind.Body;

            var description = parameter.GetXmlDocumentation();
            if (description != string.Empty)
                operationParameter.Description = description;

            return operationParameter;
        }

        private void LoadReturnType(SwaggerService service, SwaggerOperation operation, MethodInfo method, ISchemaResolver schemaResolver)
        {
            if (method.ReturnType.FullName != "System.Void")
            {
                var description = method.ReturnParameter.GetXmlDocumentation();
                if (description == string.Empty)
                    description = null; 

                var responseTypeAttributes = method.GetCustomAttributes().Where(a => a.GetType().Name == "ResponseTypeAttribute").ToList();
                if (responseTypeAttributes.Count > 0)
                {
                    foreach (var responseTypeAttribute in responseTypeAttributes)
                    {
                        dynamic dynResultTypeAttribute = responseTypeAttribute;

                        var httpStatusCode = "200";
                        if (responseTypeAttribute.GetType().GetRuntimeProperty("HttpStatusCode") != null)
                            httpStatusCode = dynResultTypeAttribute.HttpStatusCode;

                        var schema = CreateAndAddSchema<JsonSchema4>(service, dynResultTypeAttribute.ResponseType, schemaResolver);
                        operation.Responses[httpStatusCode] = new SwaggerResponse
                        {
                            Description = description,
                            Schema = schema
                        };
                    }
                }
                else
                {
                    var schema = CreateAndAddSchema<JsonSchema4>(service, method.ReturnType, schemaResolver);
                    operation.Responses["200"] = new SwaggerResponse
                    {
                        Description = description, 
                        Schema = schema
                    };
                }
            }
            else
                operation.Responses["200"] = new SwaggerResponse();
        }

        private TSchemaType CreateAndAddSchema<TSchemaType>(SwaggerService service, Type type, ISchemaResolver schemaResolver)
            where TSchemaType : JsonSchema4, new()
        {
            if (type.Name == "Task`1")
                type = type.GenericTypeArguments[0];

            if (type.Name == "JsonResult`1")
                type = type.GenericTypeArguments[0];

            if (type.Name == "HttpResponseMessage" || type.InheritsFrom("HttpResponseMessage"))
                type = typeof(object);

            var info = JsonObjectTypeDescription.FromType(type);
            if (info.Type.HasFlag(JsonObjectType.Object))
            {
                if (type == typeof(object))
                {
                    return new TSchemaType
                    {
                        Type = JsonObjectType.Object,
                        AllowAdditionalProperties = false
                    };
                }

                if (!schemaResolver.HasSchema(type))
                {
                    var schemaGenerator = new RootTypeJsonSchemaGenerator(service, JsonSchemaGeneratorSettings);
                    schemaGenerator.Generate<JsonSchema4>(type, schemaResolver);
                }

                return new TSchemaType
                {
                    Type = JsonObjectType.Object,
                    SchemaReference = schemaResolver.GetSchema(type)
                };
            }

            if (info.Type.HasFlag(JsonObjectType.Array))
            {
                var itemType = type.GenericTypeArguments.Length == 0 ? type.GetElementType() : type.GenericTypeArguments[0];
                return new TSchemaType
                {
                    Type = JsonObjectType.Array,
                    Item = CreateAndAddSchema<JsonSchema4>(service, itemType, schemaResolver)
                };
            }

            var generator = new RootTypeJsonSchemaGenerator(service, JsonSchemaGeneratorSettings);
            return generator.Generate<TSchemaType>(type, schemaResolver);
        }

        /// <exception cref="InvalidOperationException">The parameter cannot be an object or array. </exception>
        private SwaggerParameter CreatePrimitiveParameter(SwaggerService service, ParameterInfo parameter, ISchemaResolver schemaResolver)
        {
            var parameterType = parameter.ParameterType;

            var info = JsonObjectTypeDescription.FromType(parameterType);
            if (info.Type.HasFlag(JsonObjectType.Object) || info.Type.HasFlag(JsonObjectType.Array))
                throw new InvalidOperationException("The parameter '" + parameter.Name + "' cannot be an object or array.");

            var parameterGenerator = new RootTypeJsonSchemaGenerator(service, JsonSchemaGeneratorSettings);

            var segmentParameter = parameterGenerator.Generate<SwaggerParameter>(parameter.ParameterType, schemaResolver);
            segmentParameter.Name = parameter.Name;
            segmentParameter.Description = parameter.GetXmlDocumentation();
            return segmentParameter;
        }
    }
}