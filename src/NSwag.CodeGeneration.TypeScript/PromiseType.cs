//-----------------------------------------------------------------------
// <copyright file="PromiseType.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.CodeGeneration.TypeScript
{
    /// <summary>The promise type.</summary>
    public enum PromiseType
    {
        /// <summary>The standard promise implementation (polyfill may be required).</summary>
        Promise,

        /// <summary>Promise from the Q promises library.</summary>
        QPromise
    }
}