﻿//-----------------------------------------------------------------------
// <copyright file="OpenApiServerVariable.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using Newtonsoft.Json;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace NSwag
{
    /// <summary>Describes an OpenAPI server variable.</summary>
    public class OpenApiServerVariable
    {
        /// <summary>Gets or sets the enum of the server.</summary>
        [JsonProperty(PropertyName = "enum", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public ICollection<string> Enum { get; } = new Collection<string>();

        /// <summary>Gets or sets the variables of the server.</summary>
        [JsonProperty(PropertyName = "default", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Default { get; set; }

        /// <summary>Gets or sets the description of the server.</summary>
        [JsonProperty(PropertyName = "description", DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate)]
        public string Description { get; set; }
    }
}