---
title: Overview
sidebar_position: 1
---

# Nube CLI

**Nube CLI** (`@tiendanube/nube-cli`) is the official command-line tool for Tiendanube / Nuvemshop theme development. It provides everything you need to build, sync, and manage storefront themes — from local development to production deployment.

## What you can do

| Capability | Description |
| --- | --- |
| **Theme sync via Public API** | Pull, push, and watch theme files using the Tiendanube Public API with OAuth-based authentication |
| **Theme installation management** | Create, clone, fork, publish, and delete theme installations directly from your terminal |
| **Theme sync via FTP** | Pull, push, and watch theme files over FTP (legacy workflow) |
| **NubeSDK slot validation** | Scan `.tpl` template files to verify NubeSDK slot coverage |

## Two sync modes

Nube CLI supports two ways to sync theme files with your store:

### Public API (recommended)

The Public API workflow uses bearer-token authentication and the Tiendanube REST API. It supports full installation management — you can create, clone, fork, publish, and preview theme installations, as well as pull, push, and watch files.

This is the recommended approach for new theme development.

### FTP (legacy)

The FTP workflow connects directly to the store's FTP server. It supports pulling, pushing, and watching files, but does not offer installation management features. Use this if your workflow still depends on FTP access.

## CLI binaries

The package registers two equivalent binaries — use whichever matches your region:

| Binary | Region |
| --- | --- |
| `tiendanube` | Spanish-speaking markets |
| `nuvemshop` | Brazil |

Both point to the same CLI entry point, so all commands and options are identical.

## Next steps

- [Getting Started](./getting-started) — Install the CLI and configure your first project
- [Theme Development](./theme-development) — Pull, push, and watch theme files
- [Theme Installations](./theme-installations) — Manage installation instances
- [FTP Workflow](./ftp-workflow) — Legacy FTP-based theme sync
- [NubeSDK Tools](./nubesdk-tools) — Validate NubeSDK slots in templates
