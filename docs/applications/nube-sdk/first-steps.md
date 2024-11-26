---
title: First Steps
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

# First Steps

The NubeSDK contains the typescript definitions of the types required for development.

## Installation

### npm

```bash
$ npm install -D @tiendanube/nube-sdk-types
```

### yarn

```bash
$ yarn add -D @tiendanube/nube-sdk-types
```

## Usage

```typescript
import { NubeSDK, NubeSDKState } from "@tiendanube/nube-sdk-types";
```

## Creation a of a new application script from scratch

Creating a new application script from scratch that uses nube-sdk is really simple thanks to our existing [application template](https://github.com/TiendaNube/nube-sdk/tree/alpha/examples/minimal).

1. Download the application template located in https://github.com/TiendaNube/nube-sdk/tree/alpha/examples/minimal

2. Copy that template to your own folder

3. Go into your own folder

4. Run `npm install` or `yarn install` to install the dependencies

5. Run `npm run build` or `yarn build` to build the example application

After performing these steps, you will have the output of the compilation available in a single file located in `dist/main.min.js`

## Next Steps

- Learn more about [Script Structure](./script-structure)
