//-----------------------------------------------------------------------
// <copyright file="IDocumentProcessor.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Threading.Tasks;
using NSwag.Generation.Processors.Contexts;

namespace NSwag.Generation.Processors
{
    /// <summary>Post processes a generated <see cref="OpenApiDocument"/>.</summary>
    public interface IDocumentProcessor
    {
        /// <summary>Processes the specified Swagger document.</summary>
        /// <param name="context">The processor context.</param>
        void Process(DocumentProcessorContext context);
    }
}