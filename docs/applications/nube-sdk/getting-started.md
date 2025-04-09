---
title: Getting Started
---

import AppTypes from '@site/src/components/AppTypes';
import PkgTabs from '@site/src/components/PkgTabs';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

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

## Adding script to your application

Adding the script to your application has the same process that with any other script, the only difference is that you have to enable the `Uses Nube SDK` flag in the script creation screen, otherwise it will loaded as a classic script and it will fail to work as expected.

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

## Next Steps

- Learn more about [Script Structure](./script-structure)
