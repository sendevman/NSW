//-----------------------------------------------------------------------
// <copyright file="SwaggerSecurityScheme.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NJsonSchema;
using NJsonSchema.Infrastructure;

namespace NSwag
{
    /// <summary>The definition of a security scheme that can be used by the operations.</summary>
    public class SwaggerSecurityScheme : JsonExtensionObject
    {
        private SwaggerSecuritySchemeType _type;

        /// <summary>Gets or sets the type of the security scheme.</summary>
        /// <remarks>Changes the type to <see cref="SwaggerSecuritySchemeType.Http"/> and the <see cref="Scheme"/> to "basic" set to <see cref="SwaggerSecuritySchemeType.Basic"/>.</remarks>
        [JsonIgnore]
        public SwaggerSecuritySchemeType Type
        {
            get => _type;
            set
            {
                if (value == SwaggerSecuritySchemeType.Basic)
                {
                    _type = SwaggerSecuritySchemeType.Http;
                    Scheme = "basic";
                }
                else
                    _type = value;
            }
        }

        /// <summary>Gets or sets the short description for security scheme.</summary>
        [JsonProperty(PropertyName = "description", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Description { get; set; }

        /// <summary>Gets or sets the name of the header or query parameter to be used to transmit the API key.</summary>
        [JsonProperty(PropertyName = "name", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Name { get; set; }

        /// <summary>Gets or sets the type of the API key.</summary>
        [JsonProperty(PropertyName = "in", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        [JsonConverter(typeof(StringEnumConverter))]
        public SwaggerSecurityApiKeyLocation In { get; set; }

        /// <summary>Gets or sets name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235 (OpenAPI only).</summary>
        [JsonProperty(PropertyName = "scheme", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Scheme { get; set; }

        /// <summary>Gets or sets a hint to the client to identify how the bearer token is formatted. Bearer tokens are
        /// usually generated by an authorization server, so this information is primarily for documentation purposes (OpenAPI only).</summary>
        [JsonProperty(PropertyName = "bearerFormat", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string BearerFormat { get; set; }

        /// <summary>Gets or sets the OpenId Connect URL to discover OAuth2 configuration values (OpenAPI only).</summary>
        [JsonProperty(PropertyName = "openIdConnectUrl", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string OpenIdConnectUrl { get; set; }

        /// <summary>Gets or sets the configuration information for the supported flow types (OpenAPI only).</summary>
        [JsonProperty(PropertyName = "flows", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public OpenApiOAuthFlows Flows { get; set; }

        [JsonProperty(PropertyName = "type", Required = Required.Always, DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate, Order = -10)]
        [JsonConverter(typeof(StringEnumConverter))]
        internal SwaggerSecuritySchemeType TypeRaw
        {
            get
            {
                if (JsonSchemaSerialization.CurrentSchemaType == SchemaType.Swagger2)
                {
                    if (Type == SwaggerSecuritySchemeType.Http)
                        return SwaggerSecuritySchemeType.Basic;
                    if (Type == SwaggerSecuritySchemeType.OpenIdConnect)
                        return SwaggerSecuritySchemeType.OAuth2;
                }

                return Type;
            }
            set
            {
                if (JsonSchemaSerialization.CurrentSchemaType == SchemaType.Swagger2 &&
                    Type == SwaggerSecuritySchemeType.Basic)
                {
                    Type = SwaggerSecuritySchemeType.Http;
                    Scheme = "basic";
                }
                else
                    Type = value;
            }
        }

        // Swagger only: 

        /// <summary>Gets or sets the used by the OAuth2 security scheme (Swagger only).</summary>
        [JsonProperty(PropertyName = "flow", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public SwaggerOAuth2Flow Flow
        {
            get
            {
                if (Type == SwaggerSecuritySchemeType.OAuth2)
                {
                    if (Flows?.Implicit != null)
                        return SwaggerOAuth2Flow.Implicit;
                    if (Flows?.Password != null)
                        return SwaggerOAuth2Flow.Password;
                    if (Flows?.ClientCredentials != null)
                        return SwaggerOAuth2Flow.Application;
                    if (Flows?.AuthorizationCode != null)
                        return SwaggerOAuth2Flow.AccessCode;
                }

                return SwaggerOAuth2Flow.Undefined;
            }
            set => UpdateFlows(value, AuthorizationUrl, TokenUrl, Scopes);
        }

        /// <summary>Gets or sets the authorization URL to be used for this flow (Swagger only).</summary>
        [JsonProperty(PropertyName = "authorizationUrl", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string AuthorizationUrl
        {
            get => GetFlow(Flow)?.AuthorizationUrl;
            set => UpdateFlows(Flow, value, TokenUrl, Scopes);
        }

        /// <summary>Gets or sets the token URL to be used for this flow (Swagger only).</summary>
        [JsonProperty(PropertyName = "tokenUrl", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string TokenUrl
        {
            get => GetFlow(Flow)?.TokenUrl;
            set => UpdateFlows(Flow, AuthorizationUrl, value, Scopes);
        }

        /// <summary>Gets the available scopes for the OAuth2 security scheme (Swagger only).</summary>
        [JsonProperty(PropertyName = "scopes", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public IDictionary<string, string> Scopes
        {
            get => GetFlow(Flow)?.Scopes;
            set => UpdateFlows(Flow, AuthorizationUrl, TokenUrl, value);
        }

        private void UpdateFlows(SwaggerOAuth2Flow flowType, string authorizationUrl, string tokenUrl, IDictionary<string, string> scopes)
        {
            var flow = new OpenApiOAuthFlow
            {
                AuthorizationUrl = authorizationUrl,
                TokenUrl = tokenUrl,
                Scopes = scopes,
            };

            if (flowType == SwaggerOAuth2Flow.Implicit)
                Flows = new OpenApiOAuthFlows { Implicit = flow };
            if (flowType == SwaggerOAuth2Flow.Password)
                Flows = new OpenApiOAuthFlows { Password = flow };
            if (flowType == SwaggerOAuth2Flow.Application)
                Flows = new OpenApiOAuthFlows { ClientCredentials = flow };
            if (flowType == SwaggerOAuth2Flow.AccessCode)
                Flows = new OpenApiOAuthFlows { AuthorizationCode = flow };

            Flows = new OpenApiOAuthFlows { Implicit = flow }; // use Implicit as default "store"
        }

        private OpenApiOAuthFlow GetFlow(SwaggerOAuth2Flow flowType)
        {
            if (flowType == SwaggerOAuth2Flow.Implicit)
                return Flows?.Implicit;
            if (flowType == SwaggerOAuth2Flow.Password)
                return Flows?.Password;
            if (flowType == SwaggerOAuth2Flow.Application)
                return Flows?.ClientCredentials;
            if (flowType == SwaggerOAuth2Flow.AccessCode)
                return Flows?.AuthorizationCode;

            return null;
        }
    }
}