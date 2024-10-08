﻿//-----------------------------------------------------------------------
// <copyright file="NSwagSettings.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.Commands
{
    /// <summary>Enumeration of .NET runtimes where a document can be processed.</summary>
    public enum Runtime
    {
        /// <summary>Use default and do no checks.</summary>
        Default,

        /// <summary>Full .NET framework, x64.</summary>
        WinX64,

        /// <summary>Full .NET framework, x86.</summary>
        WinX86,

        /// <summary>.NET 6 app.</summary>
        Net60,

        /// <summary>.NET 8 app.</summary>
        Net80,

        /// <summary>Execute in the same process.</summary>
        Debug
    }
}
