﻿//-----------------------------------------------------------------------
// <copyright file="RedirectMiddleware.cs" company="NSwag">
//     Copyright (c) Top Dev. All rights reserved.
// </copyright>
// <license>https://github.com/sendevman/NSwag/blob/master/LICENSE.md</license>
// <author>Top Dev, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System;
using System.Threading.Tasks;
using Microsoft.Owin;

namespace NSwag.AspNet.Owin.Middlewares
{
    internal class RedirectToIndexMiddleware : OwinMiddleware
    {
        private readonly string _internalUiRoute;
        private readonly string _internalSwaggerRoute;
        private readonly Func<string, IOwinRequest, string> _transformToExternal;

        public RedirectToIndexMiddleware(OwinMiddleware next, string internalUiRoute, string internalSwaggerRoute, Func<string, IOwinRequest, string> transformToExternal)
            : base(next)
        {
            _internalUiRoute = internalUiRoute;
            _internalSwaggerRoute = internalSwaggerRoute;
            _transformToExternal = transformToExternal;
        }

        public override async Task Invoke(IOwinContext context)
        {
            if (context.Request.Path.HasValue &&
                string.Equals(context.Request.Path.Value.Trim('/'), _internalUiRoute.Trim('/'), StringComparison.OrdinalIgnoreCase))
            {
                context.Response.StatusCode = 302;

                var suffix = !string.IsNullOrWhiteSpace(_internalSwaggerRoute) ? "?url=" + _transformToExternal(_internalSwaggerRoute, context.Request) : "";
                var path = _transformToExternal(_internalUiRoute, context.Request);
                context.Response.Headers.Set("Location", (path != "/" ? path : "") + "/index.html" + suffix);
            }
            else
            {
                await Next.Invoke(context);
            }
        }
    }
}
