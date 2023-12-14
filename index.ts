import {OpenAPIBackend} from 'openapi-backend';
import * as path from 'path';

const openAPISpec = path.join(__dirname, 'schema', 'openapi.json')
console.log("path:", openAPISpec)

const api = new OpenAPIBackend({
  definition: openAPISpec,
  strict: false,
  ajvOpts: {
    verbose: true,
    allowUnionTypes: true,
  }
});

api.init();