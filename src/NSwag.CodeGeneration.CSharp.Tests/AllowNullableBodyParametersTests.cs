using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NSwag.Generation.WebApi;
using Xunit;

namespace NSwag.CodeGeneration.CSharp.Tests
{
    public class AllowNullableBodyParametersTests
    {
        [Fact]
        public async Task TestNullableBodyWithAllowNullableBodyParameters()
        {
            //// Arrange
            var generator = await GenerateCode(true);

            //// Act
            var code = generator.GenerateFile();

            //// Assert
            Assert.False(HasGuardForBodyIsNull(code));
        }

        [Fact]
        public async Task TestNullableBodyWithoutAllowNullableBodyParameters()
        {
            //// Arrange
            var generator = await GenerateCode(false);

            //// Act
            var code = generator.GenerateFile();

            //// Assert
            Assert.True(HasGuardForBodyIsNull(code));
        }

        private static async Task<CSharpClientGenerator> GenerateCode(bool allowNullableBodyParameters)
        {
            var swaggerGenerator = new WebApiOpenApiDocumentGenerator(new WebApiOpenApiDocumentGeneratorSettings
            {
                AllowNullableBodyParameters = allowNullableBodyParameters
            });
            var document = await swaggerGenerator.GenerateForControllerAsync<TestController>();

            var generator = new CSharpClientGenerator(document, new CSharpClientGeneratorSettings
            {
                InjectHttpClient = false,
                ConfigurationClass = "MyConfig",
                ClientBaseClass = "MyBaseClass"
            });
            return generator;
        }

        private static bool HasGuardForBodyIsNull(string code)
        {
            return code.Contains("throw new System.ArgumentNullException");
        }

        public class TestController : Controller
        {
            [Route("Foo")]
            public string Foo([FromBody] [Required] T requiredBody)
            {
                return string.Empty;
            }

            [Route("Bar")]
            public void Bar([FromBody] T notRequiredBody)
            {
            }

            public class T
            {
            }
        }
    }
}