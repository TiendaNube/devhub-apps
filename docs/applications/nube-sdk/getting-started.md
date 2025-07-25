---
title: Getting Started
---

import AppTypes from '@site/src/components/AppTypes';
import PkgTabs from '@site/src/components/PkgTabs';

## Scaffolding Your First Nube App

These commands download and run the `create-nube-app` CLI, which will guide you through the process of setting up your project.

:::info
Compatibility Note

Nube SDK requires Node.js version 16+. Please upgrade if your package manager warns about it.
:::

<PkgTabs>
  <PkgTabs.Item value="npm" command="npm create nube-app@latest" />
  <PkgTabs.Item value="Yarn" command="yarn create nube-app" />
  <PkgTabs.Item value="pnpm" command="pnpm create nube-app" />
  <PkgTabs.Item value="Bun" command="bun create nube-app" />
</PkgTabs>


### Manual Setup (Advanced)
We **strongly recommend** using the `create-nube-app` CLI, which provides templates, pre-configured build scripts, and development tooling aligned with the NubeSDK ecosystem.

However, if you're unable to use the CLI for any reason, you can set up your project manually.
To do this, make sure to install the necessary packages:

To have access for all types of NubeSDK, install the typescript and the package `@tiendanube/nube-sdk-types`, this could be a development dependency.

<PkgTabs>
  <PkgTabs.Item value="npm" command="npm install -D typescript @tiendanube/nube-sdk-types" />
  <PkgTabs.Item value="Yarn" command="yarn add -D typescript @tiendanube/nube-sdk-types" />
  <PkgTabs.Item value="pnpm" command="pnpm add -D typescript @tiendanube/nube-sdk-types" />
  <PkgTabs.Item value="Bun" command="bun add -D typescript @tiendanube/nube-sdk-types" />
</PkgTabs>

If you are going to develop an application with a user interface, install the package `@tiendanube/nube-sdk-ui`:

<PkgTabs>
  <PkgTabs.Item value="npm" command="npm install @tiendanube/nube-sdk-ui" />
  <PkgTabs.Item value="Yarn" command="yarn add @tiendanube/nube-sdk-ui" />
  <PkgTabs.Item value="pnpm" command="pnpm add @tiendanube/nube-sdk-ui" />
  <PkgTabs.Item value="Bun" command="bun add @tiendanube/nube-sdk-ui" />
</PkgTabs>

And if you want to use JSX/TSX syntax, also install `@tiendanube/nube-sdk-jsx`:

<PkgTabs>
  <PkgTabs.Item value="npm" command="npm install @tiendanube/nube-sdk-jsx" />
  <PkgTabs.Item value="Yarn" command="yarn add @tiendanube/nube-sdk-jsx" />
  <PkgTabs.Item value="pnpm" command="pnpm add @tiendanube/nube-sdk-jsx" />
  <PkgTabs.Item value="Bun" command="bun add @tiendanube/nube-sdk-jsx" />
</PkgTabs>

Now you need to create a module that holds the App's entrypoint, we usually use `main.ts` or `main.tsx`.

```ts
// main.ts
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export async function App(nube: NubeSDK) {
  // your code
}
```

This is our recommended typescript `compilerOptions`

```JSON
{
  "compilerOptions": {
    "target": "esnext",
    "jsx": "react-jsx",
    "jsxImportSource": "@tiendanube/nube-sdk-jsx/dist", // ONLY IF YOU USE JSX
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true
  }
}
```

To build your script, we recommend using `tsup`, which is already preconfigured in our official templates.

<PkgTabs>
  <PkgTabs.Item value="npm" command="npm install -D tsup" />
  <PkgTabs.Item value="Yarn" command="yarn add -D tsup" />
  <PkgTabs.Item value="pnpm" command="pnpm add -D tsup" />
  <PkgTabs.Item value="Bun" command="bun add -D tsup" />
</PkgTabs>

```js
//tsup.config.js

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.tsx"],
  format: ["esm"],
  target: "esnext",
  clean: true,
  minify: true,
  bundle: true,
  sourcemap: false,
  splitting: false,
  skipNodeModulesBundle: false,
  esbuildOptions(options) { // ONLY IF YOU USE JSX
    options.alias = {
      "@tiendanube/nube-sdk-jsx/dist/jsx-runtime": "@tiendanube/nube-sdk-jsx/jsx-runtime",
    };
  },
  outExtension: ({ options }) => ({
    js: options.minify ? ".min.js" : ".js"
  })
});
```

## Adding script to your application

Adding the script to your application has the same process that with any other script, the only difference is that you have to enable the `Uses Nube SDK` flag in the script creation screen, otherwise it will loaded as a classic script and it will fail to work as expected.

:::info
If the scripts will be inserted **into an existing app**, please send the app_id to [api@tiendanube.com](mailto:api@tiendanube.com) / [api@nuvemshop.com.br](mailto:api@nuvemshop.com.br) for enablement. Otherwise, you will need to **create a new app**.
:::

![NubeSDK Flag](../../../static/img/pt/nube-sdk-flag.png "NubeSDK Flag")

:::info
The "Use NubeSDK" option is currently supported only on the Checkout page.
If you select this option for scripts intended for the Store page, the SDK will not work as expected.
:::

**Important!**

Before adding your script, make sure to run the build process using:

<PkgTabs>
  <PkgTabs.Item value="npm" command="npm run build" />
  <PkgTabs.Item value="Yarn" command="yarn build" />
  <PkgTabs.Item value="pnpm" command="pnpm run build" />
  <PkgTabs.Item value="Bun" command="bun run build" />
</PkgTabs>

## Enabling development mode

Applications created using the `create-nube-app` CLI tool are already preconfigured for development mode.
By running the following command:

<PkgTabs>
  <PkgTabs.Item value="npm" command="npm run dev" />
  <PkgTabs.Item value="Yarn" command="yarn dev" />
  <PkgTabs.Item value="pnpm" command="pnpm run dev" />
  <PkgTabs.Item value="Bun" command="bun run dev" />
</PkgTabs>

A local development server will start on port `8080`.

To use development mode, you must first enable it and register a valid development URL in the Partner Portal, under your scripts's configuration settings.

:::info
After making changes in the Partner Portal, there might be a cache delay before the updates are reflected. Please allow some time for the changes to take effect.
:::

![NubeSDK Flag](../../../static/img/pt/nube-sdk-development-mode.png "NubeSDK Flag")

After starting development mode, developers can confirm that the environment is correctly configured by opening the browser console and executing the following command:

```typescript
nubeSDK.getState().apps;
```

If development mode is active, an object similar to the following will be returned:

```JSON
{
  "1028": {
    "id": "1028",
    "script": "http://localhost:8080/main.min.js",
    "registered": true
  }
}
```

Ensure that the script attribute of your app contains the URL localhost. This confirms that the environment is properly set up for development.

## NubeSDK Assistant

The NubeSDK Assistant is a specialized ChatGPT-powered tool designed to help developers create and build apps using the NubeSDK. This assistant provides:

- Expert guidance on NubeSDK implementation
- Code examples and best practices
- Troubleshooting support
- Step-by-step assistance in app development

You can access the NubeSDK Assistant at: [NubeSDK Assistant](https://chatgpt.com/g/g-6812298534c88191be0705ba82fea093-nubesdk-assistant)

## Next Steps

- Learn more about [Script Structure](./script-structure)
