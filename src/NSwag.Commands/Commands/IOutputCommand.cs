//-----------------------------------------------------------------------
// <copyright file="OutputCommandBase.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using NConsole;

namespace NSwag.Commands
{
    public interface IOutputCommand : IConsoleCommand
    {
        string OutputFilePath { get; set; }
    }
}