//-----------------------------------------------------------------------
// <copyright file="CSharpControllerRouteNamingStrategy.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.CodeGeneration.CSharp.Models
{
    /// <summary>The CSharp controller routing naming strategy enum.</summary>
    public enum CSharpControllerRouteNamingStrategy
    {
        /// <summary>Disable route naming.</summary>
        None,

        /// <summary>Use the operationId as the route name, if available.</summary>
        OperationId
    }
}
