﻿//-----------------------------------------------------------------------
// <copyright file="RuntimeUtilities.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System;
#if !NETFRAMEWORK
using Microsoft.Extensions.PlatformAbstractions;
#endif

namespace NSwag.Commands
{
    /// <summary>Provides runtime utilities.</summary>
    public class RuntimeUtilities
    {
        /// <summary>Gets the current runtime.</summary>
        public static Runtime CurrentRuntime
        {
            get
            {
#if NETFRAMEWORK
                return IntPtr.Size == 4 ? Runtime.WinX86 : Runtime.WinX64;
#else
                var framework = PlatformServices.Default.Application.RuntimeFramework;
                if (framework.Identifier == ".NETCoreApp")
                {
                    if (framework.Version.Major >= 8)
                    {
                        return Runtime.Net80;
                    }

                    if (framework.Version.Major >= 6)
                    {
                        return Runtime.Net60;
                    }

                    return Runtime.Net60;
                }
                return IntPtr.Size == 4 ? Runtime.WinX86 : Runtime.WinX64;
#endif
            }
        }
    }
}
