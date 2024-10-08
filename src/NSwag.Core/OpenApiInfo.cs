﻿//-----------------------------------------------------------------------
// <copyright file="SwaggerInfo.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using Newtonsoft.Json;
using NJsonSchema;

namespace NSwag
{
    /// <summary>The web service description.</summary>
    public class OpenApiInfo : JsonExtensionObject
    {
        /// <summary>Gets or sets the title.</summary>
        [JsonProperty(PropertyName = "title", Required = Required.Always,
            DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Title { get; set; } = "Swagger specification";

        /// <summary>Gets or sets the description.</summary>
        [JsonProperty(PropertyName = "description", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Description { get; set; }

        /// <summary>Gets or sets the terms of service.</summary>
        [JsonProperty(PropertyName = "termsOfService", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string TermsOfService { get; set; }

        /// <summary>Gets or sets the contact information.</summary>
        [JsonProperty(PropertyName = "contact", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public OpenApiContact Contact { get; set; }

        /// <summary>Gets or sets the license information.</summary>
        [JsonProperty(PropertyName = "license", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public OpenApiLicense License { get; set; }

        /// <summary>Gets or sets the API version.</summary>
        [JsonProperty(PropertyName = "version", Required = Required.Always, DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Version { get; set; } = "1.0.0";
    }
}