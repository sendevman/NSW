//-----------------------------------------------------------------------
// <copyright file="SwaggerIgnoreAttribute.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System;

namespace NSwag.Annotations
{
    /// <summary>Excludes an action method from the generated Swagger specification.</summary>
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Method | AttributeTargets.Class | AttributeTargets.Parameter)]
#pragma warning disable 618
    public class OpenApiIgnoreAttribute : SwaggerIgnoreAttribute
#pragma warning restore 618
    {
    }

    /// <summary>Excludes an action method from the generated Swagger specification.</summary>
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Method | AttributeTargets.Class | AttributeTargets.Parameter)]
    [Obsolete("Use " + nameof(OpenApiIgnoreAttribute) + " instead.")]
    public class SwaggerIgnoreAttribute : Attribute
    {
    }
}
