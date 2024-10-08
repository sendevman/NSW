﻿//-----------------------------------------------------------------------
// <copyright file="SwaggerContact.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using Newtonsoft.Json;
using NJsonSchema;

namespace NSwag
{
    /// <summary>The web service contact description.</summary>
    public class OpenApiContact : JsonExtensionObject
    {
        /// <summary>Gets or sets the name.</summary>
        [JsonProperty(PropertyName = "name", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Name { get; set; }

        /// <summary>Gets or sets the contact URL.</summary>
        [JsonProperty(PropertyName = "url", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Url { get; set; }

        /// <summary>Gets or sets the contact email.</summary>
        [JsonProperty(PropertyName = "email", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Email { get; set; }
    }
}