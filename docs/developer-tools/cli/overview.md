---
title: Overview
sidebar_position: 1
---

# Tiendanube/Nuvemshop CLI

**Tiendanube/Nuvemshop CLI** (`@tiendanube/cli`) is the official command-line tool for Tiendanube/Nuvemshop theme development. It provides everything you need to build, sync, and manage storefront themes — from local development to production deployment.

## What you can do

| Capability                        | Description                                                                                        |
| --------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Theme workflow**                | Pull, push, and watch theme files using the Tiendanube Public API with bearer-token authentication |
| **Theme installation management** | Create, clone, fork, publish, and delete theme installations directly from your terminal           |
| **Theme sync via FTP**            | Pull, push, and watch theme files over FTP                                                         |

## Two sync modes

The Tiendanube/Nuvemshop CLI supports two ways to sync theme files with your store:

### Theme workflow

The Theme workflow uses bearer-token authentication and the Tiendanube REST API. It supports full installation management — you can create, clone, fork, publish, and preview theme installations, as well as pull, push, and watch files.

:::warning
The Theme workflow currently supports only the **Ipanema** theme. For other themes, use the [FTP workflow (legacy)](./ftp-workflow).
:::

### FTP workflow (legacy)

The FTP workflow connects directly to the store's FTP server. It supports pulling, pushing, and watching files, but does not offer installation management features. Use this for themes other than Ipanema, or if your workflow depends on FTP access.

## Next steps

- [Getting Started](./getting-started) — Install the CLI and choose your workflow
- [Theme Workflow](./api-workflow) — Set up API credentials and start syncing
- [Theme Installations](./theme-installations) — Create, clone, fork, and publish installations
- [FTP Workflow (legacy)](./ftp-workflow) — FTP-based theme sync
