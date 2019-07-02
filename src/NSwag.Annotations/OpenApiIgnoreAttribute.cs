﻿//-----------------------------------------------------------------------
// <copyright file="SwaggerIgnoreAttribute.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/RicoSuter/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System;

namespace NSwag.Annotations
{
    /// <summary>Excludes an action method from the generated Swagger specification.</summary>
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Method | AttributeTargets.Class | AttributeTargets.Parameter)]
    public class OpenApiIgnoreAttribute : SwaggerIgnoreAttribute
    {
    }

    /// <summary>Excludes an action method from the generated Swagger specification.</summary>
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Method | AttributeTargets.Class | AttributeTargets.Parameter)]
    [Obsolete("Use " + nameof(OpenApiIgnoreAttribute) + " instead.")]
    public class SwaggerIgnoreAttribute : Attribute
    {
    }
}