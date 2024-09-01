//-----------------------------------------------------------------------
// <copyright file="SwaggerSecurityRequirement.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Collections.Generic;

namespace NSwag
{
    /// <summary>The operation security requirements.</summary>
    public class OpenApiSecurityRequirement : Dictionary<string, IEnumerable<string>>
    {

    }
}