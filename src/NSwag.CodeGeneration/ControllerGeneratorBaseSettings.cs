//-----------------------------------------------------------------------
// <copyright file="ControllerGeneratorBaseSettings.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.CodeGeneration
{
    /// <summary>Settings for the ClientGeneratorBase.</summary>
    public class ControllerGeneratorBaseSettings
    {
        /// <summary>Initializes a new instance of the <see cref="ClientGeneratorBaseSettings"/> class.</summary>
        public ControllerGeneratorBaseSettings()
        {
            GenerateDtoTypes = true;
        }

        /// <summary>Gets or sets a value indicating whether to generate DTO classes (default: true).</summary>
        public bool GenerateDtoTypes { get; set; }
    }
}