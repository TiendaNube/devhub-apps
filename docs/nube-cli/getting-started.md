---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

| Requirement | Details |
| --- | --- |
| **Node.js 18+** | [Download Node.js](https://nodejs.org/) if you don't have it |
| **npm** | Comes with Node.js |

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

## Choose your workflow

Nube CLI supports two ways to sync theme files. Pick the one that fits your setup:

| Workflow | Best for | Guide |
| --- | --- | --- |
| **Public API** | Ipanema theme — full installation management, OAuth auth | [Public API Workflow](./api-workflow) |
| **FTP** | All other themes — simple file sync over FTP | [FTP Workflow](./ftp-workflow) |

:::warning
The Public API workflow currently supports only the **Ipanema** theme. For all other themes, use the FTP workflow.
:::
