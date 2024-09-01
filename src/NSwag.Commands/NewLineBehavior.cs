//-----------------------------------------------------------------------
// <copyright file="NewLineBehavior.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.Commands
{
    /// <summary>
    /// Enumeratoin of new line behaviors.
    /// </summary>
    public enum NewLineBehavior
    {
        /// <summary>
        /// Automatic line ending based on the current OS.
        /// </summary>
        Auto, 

        /// <summary>
        /// CRLF.
        /// </summary>
        CRLF, 

        /// <summary>
        /// LF.
        /// </summary>
        LF
    }
}