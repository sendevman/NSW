//-----------------------------------------------------------------------
// <copyright file="HttpClass.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.CodeGeneration.TypeScript
{
    /// <summary>The Angular HTTP class.</summary>
    public enum HttpClass
    {
        /// <summary>Use the legacy/obsolete Http class (pre Angular 4.3).</summary>
        Http,

        /// <summary>Use the new HttpClient class (Angular 4.3+).</summary>
        HttpClient
    }
}