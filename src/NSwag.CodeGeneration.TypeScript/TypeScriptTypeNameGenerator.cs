//-----------------------------------------------------------------------
// <copyright file="TypeScriptTypeNameGenerator.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using NJsonSchema;

namespace NSwag.CodeGeneration.TypeScript
{
    /// <summary>Generates a TypeScript type name (Error is renamed to ErrorDto, otherwise the defaults are used).</summary>
    public class TypeScriptTypeNameGenerator : DefaultTypeNameGenerator
    {
        /// <summary>Generates the type name for the given schema.</summary>
        /// <param name="schema">The schema.</param>
        /// <param name="typeNameHint">The type name hint.</param>
        /// <returns>The type name.</returns>
        protected override string Generate(JsonSchema schema, string typeNameHint)
        {
            if (typeNameHint == "Error")
            {
                typeNameHint = "ErrorDto";
            }

            if (typeNameHint == "Date")
            {
                typeNameHint = "DateDto";
            }

            return base.Generate(schema, typeNameHint);
        }
    }
}