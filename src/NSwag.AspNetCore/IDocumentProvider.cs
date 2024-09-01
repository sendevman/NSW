//-----------------------------------------------------------------------
// <copyright file="IDocumentProvider.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Microsoft.Extensions.ApiDescriptions
{
    // This service will be looked up by name from the service collection when using
    // the <c>dotnet-getdocument</c> tool from the Microsoft.Extensions.ApiDescription.Server package.
    internal interface IDocumentProvider
    {
        IEnumerable<string> GetDocumentNames();

        Task GenerateAsync(string documentName, TextWriter writer);
    }
}
