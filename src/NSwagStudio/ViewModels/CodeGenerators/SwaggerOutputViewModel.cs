//-----------------------------------------------------------------------
// <copyright file="MainWindowModel.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Threading.Tasks;
using NSwag;

namespace NSwagStudio.ViewModels.CodeGenerators
{
    public class SwaggerOutputViewModel : ViewModelBase
    {
        private string _swaggerCode;

        public async Task GenerateClientAsync(OpenApiDocument document, string documentPath)
        {
            if (document != null)
                SwaggerCode = await RunTaskAsync(Task.Run(() => document.ToJson()));
            else
                SwaggerCode = string.Empty;
        }

        /// <summary>Gets or sets the Swagger code. </summary>
        public string SwaggerCode
        {
            get { return _swaggerCode; }
            set { Set(ref _swaggerCode, value); }
        }
    }
}
