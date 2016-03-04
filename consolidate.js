var SwaggerParser = require('swagger-parser');
var process = require('process');

SwaggerParser.bundle('index.yaml').then(function(api) {
  process.stdout.write(JSON.stringify(api));
}).catch(function(err) {
  console.log(err);
});
