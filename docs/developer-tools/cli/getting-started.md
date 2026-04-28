---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

| Requirement | Details |
| --- | --- |
| **Node.js 24.15+** | [Download Node.js](https://nodejs.org/) if you don't have it |
| **npm** | Comes with Node.js |

## Install

```bash
npm install -g @tiendanube/cli
```

Verify the installation:

```bash
tiendanube --version
```

:::tip
You can use either `tiendanube` or `nuvemshop` — both commands are identical.
:::

## Choose your workflow

The Tiendanube/Nuvemshop CLI supports two ways to sync theme files. Compare the capabilities and pick the one that fits your setup:

| Feature | FTP (legacy) | Fork |
| --- | --- | --- |
| Pull / Push / Watch | Yes | Yes |
| Installation management | No | Yes |
| Fork / Clone / Publish | No | Yes |
| Preview URLs | No | Yes |
| Authentication | FTP credentials | Bearer token |
| Theme support | All themes | Ipanema only |

| Workflow | Best for | Guide |
| --- | --- | --- |
| **Fork** | Ipanema theme — full installation management, bearer-token auth | [Fork workflow](./api-workflow) |
| **FTP (legacy)** | All other themes — simple file sync over FTP | [FTP Workflow (legacy)](./ftp-workflow) |

:::warning
The Fork workflow currently supports only the **Ipanema** theme. For all other themes, use the FTP workflow (legacy).
:::
