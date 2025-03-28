---
title: Getting Started
---

import AppTypes from '@site/src/components/AppTypes';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

## Scaffolding Your First Nube App

These commands download and run the `create-nube-app` CLI, which will guide you through the process of setting up your project.

### With npm

```bash
npm create nube-app@latest
```

### With yarn

```bash
yarn create nube-app
```

### With PNPM

```bash
pnpm create nube-app
```

## Adding script to your application

Adding the script to your application has the same process that with any other script, the only difference is that you have to enable the `Uses Nube SDK` flag in the script creation screen, otherwise it will loaded as a classic script and it will fail to work as expected.

![NubeSDK Flag](../../../static/img/pt/nube-sdk-flag.png "NubeSDK Flag")

### Important!
Before adding your script, make sure to run the build process using:

```sh
npm run build
```

## Enabling development mode

Applications created using the `create-nube-app` CLI tool are already preconfigured for development mode.
By running the following command:

```sh
npm run dev
```

A local development server will start on port `8080`.

To use development mode, you must first enable it and register a valid development URL in the Partner Portal, under your scripts's configuration settings.

![NubeSDK Flag](../../../static/img/pt/nube-sdk-development-mode.png "NubeSDK Flag")

## Next Steps

- Learn more about [Script Structure](./script-structure)
