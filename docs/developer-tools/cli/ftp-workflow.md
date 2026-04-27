---
title: FTP Workflow (legacy)
sidebar_position: 6
---

# FTP Workflow (legacy)

:::info
The [Theme workflow](./api-workflow) offers richer features (installation management, preview URLs, fork/clone/publish) but currently supports only the **Ipanema** theme. For all other themes, the FTP workflow (legacy) is the way to go.
:::

The Tiendanube/Nuvemshop CLI supports syncing theme files over FTP. All FTP commands are under the `theme ftp` group:

```bash
tiendanube theme ftp <command>
```

## Setup

Configure your FTP connection:

```bash
tiendanube theme ftp setup \
  --ftp-server FTP_HOST \
  --ftp-username FTP_USER \
  --ftp-password FTP_PASSWORD \
  --store-url https://yourstore.mitiendanube.com
```

The CLI tests the FTP connection and saves the credentials to your `.nube` config file.

### Options

| Option | Description |
| --- | --- |
| `--ftp-server <host>` | **Required.** FTP server hostname |
| `--ftp-username <user>` | **Required.** FTP username |
| `--ftp-password <pass>` | **Required.** FTP password |
| `--store-url <url>` | **Required.** Your storefront URL |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

:::tip
You can find your FTP credentials in the store admin panel. Look for the "Open FTP" option in the theme settings.
:::

## Pull

Download theme files from the FTP server:

```bash
tiendanube theme ftp pull
```

### Options

| Option | Description |
| --- | --- |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

## Push

Upload local theme files to the FTP server:

```bash
tiendanube theme ftp push
```

### Options

| Option | Description |
| --- | --- |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

## Watch

Watch local files and sync changes to FTP on save:

```bash
tiendanube theme ftp watch
```

Like the Theme watch mode, this monitors your local files and pushes changes automatically. It also handles file deletions. By default, it opens a browser window pointed at your storefront and reloads it after each successful sync. Use `--no-browser` to skip that.

### Options

| Option | Description |
| --- | --- |
| `--no-browser` | Don't open or reload a browser window |
| `-v` | Enable verbose output |

