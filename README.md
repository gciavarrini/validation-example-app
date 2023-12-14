# Minimal Serverless Workflow Spec Validation Example

This repository contains a minimal example for testing serverless spec validation using the OpenAPI Backend library.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

**Install dependencies:**

If using npm:

```bash
npm install
```

If using Yarn:

```bash
yarn install
```

## Usage

If using npm:

```bash 
npm start
```

If using Yarn:

```bash
yarn start
```

# Project Structure

- `schema/openapi.json`: OpenAPI spec file.  
   It refers `workflow.json`.
- `schema/*.json`: Serverless specification schemas cloned from https://github.com/serverlessworkflow/specification/pull/801
- `index.ts`: Entry point
- `package.json`: Node.js project configuration file.

# Expected issue

```json
Error: Document is not valid OpenAPI. 16 validation errors:
[
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions/items",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
      "additionalProperty": "$ref"
    },
    "message": "must NOT have additional properties"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions/items",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
      "additionalProperty": "type"
    },
    "message": "must NOT have additional properties"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions/items",
    "schemaPath": "#/oneOf",
    "keyword": "oneOf",
    "params": {
      "passingSchemas": null
    },
    "message": "must match exactly one schema in oneOf"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions/items",
    "schemaPath": "#/properties/items/anyOf/1/type",
    "keyword": "type",
    "params": {
      "type": "array"
    },
    "message": "must be array"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions/items",
    "schemaPath": "#/properties/items/anyOf",
    "keyword": "anyOf",
    "params": {},
    "message": "must match a schema in anyOf"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions",
    "schemaPath": "#/required",
    "keyword": "required",
    "params": {
      "missingProperty": "$ref"
    },
    "message": "must have required property '$ref'"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
      "additionalProperty": "type"
    },
    "message": "must NOT have additional properties"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
      "additionalProperty": "items"
    },
    "message": "must NOT have additional properties"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items/properties/definitions",
    "schemaPath": "#/oneOf",
    "keyword": "oneOf",
    "params": {
      "passingSchemas": null
    },
    "message": "must match exactly one schema in oneOf"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items",
    "schemaPath": "#/required",
    "keyword": "required",
    "params": {
      "missingProperty": "$ref"
    },
    "message": "must have required property '$ref'"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
      "additionalProperty": "type"
    },
    "message": "must NOT have additional properties"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
      "additionalProperty": "properties"
    },
    "message": "must NOT have additional properties"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult/properties/items",
    "schemaPath": "#/oneOf",
    "keyword": "oneOf",
    "params": {
      "passingSchemas": null
    },
    "message": "must match exactly one schema in oneOf"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult",
    "schemaPath": "#/required",
    "keyword": "required",
    "params": {
      "missingProperty": "$ref"
    },
    "message": "must have required property '$ref'"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
      "additionalProperty": "properties"
    },
    "message": "must NOT have additional properties"
  },
  {
    "instancePath": "/components/schemas/WorkflowListResult",
    "schemaPath": "#/oneOf",
    "keyword": "oneOf",
    "params": {
      "passingSchemas": null
    },
    "message": "must match exactly one schema in oneOf"
  }
]

```