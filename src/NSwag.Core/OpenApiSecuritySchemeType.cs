//-----------------------------------------------------------------------
// <copyright file="SwaggerSecuritySchemeType.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Runtime.Serialization;

namespace NSwag
{
    /// <summary></summary>
    public enum OpenApiSecuritySchemeType
    {
        /// <summary>The security scheme is not defined.</summary>
        Undefined,

        /// <summary>Basic authentication.</summary>
        [EnumMember(Value = "basic")]
        Basic,

        /// <summary>API key authentication.</summary>
        [EnumMember(Value = "apiKey")]
        ApiKey,

        /// <summary>OAuth2 authentication.</summary>
        [EnumMember(Value = "oauth2")]
        OAuth2,

        /// <summary>HTTP authentication (OpenAPI only).</summary>
        [EnumMember(Value = "http")]
        Http,

        /// <summary>OpenIdConnect authentication (OpenAPI only).</summary>
        [EnumMember(Value = "openIdConnect")]
        OpenIdConnect,
    }
}