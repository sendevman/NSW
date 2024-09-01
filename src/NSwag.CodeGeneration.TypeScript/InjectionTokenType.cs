//-----------------------------------------------------------------------
// <copyright file="InjectionTokenType.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.CodeGeneration.TypeScript
{
    /// <summary>The Angular token type.</summary>
    public enum InjectionTokenType
    {
        /// <summary>Use the legacy/obsolete OpaqueToken (pre Angular 4).</summary>
        OpaqueToken,

        /// <summary>Use the new InjectionToken class (Angular 4+).</summary>
        InjectionToken
    }
}