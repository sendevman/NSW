//-----------------------------------------------------------------------
// <copyright file="IOperationModel.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System.Collections.Generic;

namespace NSwag.CodeGeneration.Models
{
    /// <summary>The operation model interface.</summary>
    public interface IOperationModel
    {
        /// <summary>Gets the responses.</summary>
        IEnumerable<ResponseModelBase> Responses { get; }

        /// <summary>Gets Swagger operation's mime type.</summary>
        string Produces { get; }
    }
}