---
title: Manual Project Setup
---

import PkgTabs from '@site/src/components/PkgTabs';

# Manual Project Setup (Advanced)

We **strongly recommend** using the `create-nube-app` CLI, which provides templates, pre-configured build scripts, and development tooling aligned with the NubeSDK ecosystem.

However, if you're unable to use the CLI for any reason, you can set up your project manually.

## Installing Dependencies

To have access for all types of NubeSDK, install TypeScript and the package `@tiendanube/nube-sdk-types`. This can be a development dependency.

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

## Creating the App Entrypoint

Now you need to create a module that holds the App's entrypoint. We usually use `main.ts` or `main.tsx`.

```ts
// main.ts
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export async function App(nube: NubeSDK) {
  // your code
}
```

## TypeScript Configuration

This is our recommended TypeScript `compilerOptions`:

```json
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

## Build Configuration

To build your script, we recommend using `tsup`, which is already preconfigured in our official templates.

<PkgTabs>
  <PkgTabs.Item value="npm" command="npm install -D tsup" />
  <PkgTabs.Item value="Yarn" command="yarn add -D tsup" />
  <PkgTabs.Item value="pnpm" command="pnpm add -D tsup" />
  <PkgTabs.Item value="Bun" command="bun add -D tsup" />
</PkgTabs>

```js
// tsup.config.js

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

## Next Steps

Once your project is set up, continue with [Adding script to your application](./getting-started#adding-script-to-your-application) to learn how to register your script in the Partner Portal.
