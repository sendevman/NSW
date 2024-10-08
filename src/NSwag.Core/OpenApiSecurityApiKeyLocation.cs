//-----------------------------------------------------------------------
// <copyright file="SwaggerSecurityApiKeyLocation.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Runtime.Serialization;

namespace NSwag
{
    /// <summary>Specifies the location of the API Key.</summary>
    public enum OpenApiSecurityApiKeyLocation
    {
        /// <summary>The API key kind is not defined.</summary>
        Undefined,

        /// <summary>In a query parameter.</summary>
        [EnumMember(Value = "query")]
        Query,

        /// <summary>In the HTTP header.</summary>
        [EnumMember(Value = "header")]
        Header,

        /// <summary>In the HTTP cookie (OpenAPI only).</summary>
        [EnumMember(Value = "cookie")]
        Cookie
    }
}