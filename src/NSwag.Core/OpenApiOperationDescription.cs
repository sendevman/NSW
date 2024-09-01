//-----------------------------------------------------------------------
// <copyright file="SwaggerOperationDescription.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

namespace NSwag
{
    /// <summary>Flattened information about an operation.</summary>
    public class OpenApiOperationDescription
    {
        /// <summary>Gets or sets the relative URL path.</summary>
        public string Path { get; set; }

        /// <summary>Gets or sets the HTTP method.</summary>
        public string Method { get;  set; }

        /// <summary>Gets or sets the operation.</summary>
        public OpenApiOperation Operation { get; set; }
    }
}