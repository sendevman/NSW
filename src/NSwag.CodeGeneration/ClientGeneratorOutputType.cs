//-----------------------------------------------------------------------
// <copyright file="ClientGeneratorBase.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag.CodeGeneration
{
    /// <summary>Specifies the output type.</summary>
    public enum ClientGeneratorOutputType
    {
        /// <summary>A single output with contracts and implementation.</summary>
        Full,

        /// <summary>The contracts output.</summary>
        Contracts,

        /// <summary>The implementation output.</summary>
        Implementation
    }
}