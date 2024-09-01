//-----------------------------------------------------------------------
// <copyright file="SwaggerLicense.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using Newtonsoft.Json;
using NJsonSchema;

namespace NSwag
{
    /// <summary>The license information.</summary>
    public class OpenApiLicense : JsonExtensionObject
    {
        /// <summary>Gets or sets the name.</summary>
        [JsonProperty(PropertyName = "name", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Name { get; set; }

        /// <summary>Gets or sets the license URL.</summary>
        [JsonProperty(PropertyName = "url", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Url { get; set; }
    }
}