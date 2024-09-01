//-----------------------------------------------------------------------
// <copyright file="CodeGeneratorCommandBase.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using NConsole;
using Newtonsoft.Json;
using NSwag.CodeGeneration;

namespace NSwag.Commands.CodeGeneration
{
    public abstract class CodeGeneratorCommandBase<TSettings> : InputOutputCommandBase
        where TSettings : ClientGeneratorBaseSettings
    {
        protected CodeGeneratorCommandBase(TSettings settings)
        {
            Settings = settings;
        }

        [JsonIgnore]
        public TSettings Settings { get; }

        [Argument(Name = "TemplateDirectory", IsRequired = false, Description = "The Liquid template directory (experimental).")]
        public string TemplateDirectory
        {
            get { return Settings.CodeGeneratorSettings.TemplateDirectory; }
            set { Settings.CodeGeneratorSettings.TemplateDirectory = value; }
        }
    }
}