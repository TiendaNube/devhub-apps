---
title: Fork workflow
sidebar_position: 3
---

# Fork workflow

The Fork workflow uses bearer-token authentication and the Tiendanube REST API. You get full file sync (pull, push, watch) plus installation management (create, clone, fork, publish, preview, delete).

:::warning Ipanema theme only
The Fork workflow currently supports only the **Ipanema** theme. If you're working with a different theme, use the [FTP workflow (legacy)](./ftp-workflow) instead.
:::

## Authorize

Run `theme authorize` to connect the CLI to your store. It opens your default browser, you sign in, copy the token from the page, and paste it back into the terminal:

```bash
tiendanube theme authorize
```

### 1. Copy the access token

Once you accept, the browser displays your Public API access token. Use the Copy to clipboard button to copy it:

![Public API access token shown after successful authorization](/img/en/cli-authorize-token.png)

### 2. Paste the token back into the terminal

Return to the terminal where `theme authorize` is still running and paste the token at the `Paste your token:` prompt. The CLI decodes the token, fetches your storefront URL from the Public API, writes a `.nube` file in your working directory, and verifies the connection.

:::warning
The `.nube` file contains your access token. Add it to your `.gitignore`.
:::

### Non-interactive mode

For scripts and CI, pass the token directly with `--token` to skip the browser and the prompt:

```bash
tiendanube theme authorize --token YOUR_TOKEN -y
```

The token must be the **full Base64 string** shown on the authorize page (it encodes both `store_id` and `access_token`), not the raw API access token.

### Options

| Option            | Description                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `--token <token>` | Base64 token from the authorize page; skips the browser and prompt   |
| `-y`              | Skip the non-empty directory warning                                 |
| `-v`              | Enable verbose HTTP logging                                          |

## Configuration file

`theme authorize` creates a `.nube` file in your working directory. It holds sensitive information — including your access token — and must not be committed to source control. Add it to your `.gitignore`.

:::info
Each working directory is tied to one workflow. Theme commands won't run in a directory configured for FTP, and vice versa.
:::

## Rate limiting

The Tiendanube API enforces rate limits. If the CLI receives a `429 Too Many Requests` response, it automatically waits and retries. During bulk operations like `theme push` (which uploads files in parallel), the CLI limits concurrency to 2 simultaneous uploads to stay within API limits.

## Next steps

- [Theme Development](./theme-development) — Pull, push, and watch theme files
- [Theme Installations](./theme-installations) — Create, clone, fork, publish, and delete installations
