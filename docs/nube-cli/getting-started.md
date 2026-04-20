---
title: Getting Started
sidebar_position: 2
---

# Getting Started

Install Nube CLI and connect it to your store in under a minute.

## Prerequisites

| Requirement | Details |
| --- | --- |
| **Node.js 18+** | [Download Node.js](https://nodejs.org/) if you don't have it |
| **npm** | Comes with Node.js |
| **Public API access token** | An OAuth access token for the Tiendanube Public API |
| **Store ID** | Your numeric store identifier |
| **Store URL** | Your storefront URL (e.g. `https://mystore.mitiendanube.com`) |

## Install

```bash
npm install -g @tiendanube/nube-cli
```

Verify the installation:

```bash
tiendanube --version
```

:::tip
You can use either `tiendanube` or `nuvemshop` — both commands are identical.
:::

## Connect to your store

Run `theme setup` to save your API credentials:

```bash
tiendanube theme setup \
  --token YOUR_ACCESS_TOKEN \
  --store_id YOUR_STORE_ID \
  --store_url https://yourstore.mitiendanube.com
```

This creates a `.nube` configuration file in your working directory and verifies your credentials against the API.

:::warning
The `.nube` file contains your access token. Add it to your `.gitignore`.
:::

## What's next

You're ready to start working with themes:

- [Theme Development](./theme-development) — Pull, push, and watch theme files
- [Theme Installations](./theme-installations) — Create, clone, fork, and publish installations
- [FTP Workflow](./ftp-workflow) — Legacy FTP-based sync (if you're not using the Public API)
