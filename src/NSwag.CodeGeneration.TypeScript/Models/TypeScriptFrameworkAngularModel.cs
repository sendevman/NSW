//-----------------------------------------------------------------------
// <copyright file="TypeScriptFrameworkAngularModel.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.CodeGeneration.TypeScript.Models
{
    /// <summary>Angular specific information.</summary>
    public class TypeScriptFrameworkAngularModel
    {
        private readonly TypeScriptClientGeneratorSettings _settings;

        internal TypeScriptFrameworkAngularModel(TypeScriptClientGeneratorSettings settings)
        {
            _settings = settings;
        }

        /// <summary>Gets or sets the injection token type (used in the Angular template).</summary>
        public string InjectionTokenType => _settings.InjectionTokenType.ToString();

        /// <summary>Gets or sets the token name for injecting the API base URL string (used in the Angular template).</summary>
        public string BaseUrlTokenName => _settings.BaseUrlTokenName;

        /// <summary>Gets the HTTP client class name.</summary>
        public string HttpClass => UseHttpClient ? "HttpClient" : "Http";

        /// <summary>Gets a value indicating whether to use HttpClient with the Angular template.</summary>
        public bool UseHttpClient => _settings.Template == TypeScriptTemplate.Angular &&
                                     _settings.HttpClass == TypeScript.HttpClass.HttpClient;

        /// <summary>Gets a value indicating whether to send withCredentials: true with the http request options.</summary>
        public bool WithCredentials => _settings.Template == TypeScriptTemplate.Angular &&
                                       _settings.HttpClass == TypeScript.HttpClass.HttpClient &&
                                       _settings.WithCredentials;

        /// <summary>Gets a value indicating whether to use the Angular 6 Singleton Provider (Angular template only, default: false).</summary>
        public bool UseSingletonProvider => _settings.Template == TypeScriptTemplate.Angular &&
                                            _settings.UseSingletonProvider;

        /// <summary>Gets whether the export keyword should be added to all classes and enums.</summary>
        public bool ExportTypes => _settings.TypeScriptGeneratorSettings.ExportTypes;
    }
}