//-----------------------------------------------------------------------
// <copyright file="DocumentProcessorCollection.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Collections.ObjectModel;
using System.Linq;

namespace NSwag.Generation.Processors.Collections
{
    /// <summary>A collection of docment processors.</summary>
    public class DocumentProcessorCollection : Collection<IDocumentProcessor>
    {
        /// <summary>Gets an operation processor of the specified type.</summary>
        /// <typeparam name="T">The operation processor type.</typeparam>
        /// <returns>The operation processor.</returns>
        public T TryGet<T>()
        {
            return (T)this.FirstOrDefault(p => p is T);
        }
    }
}