---
title: FTP Workflow
sidebar_position: 5
---

# FTP Workflow

:::info Legacy workflow
The FTP workflow is maintained for backward compatibility. For new projects, we recommend the [Public API workflow](./getting-started), which offers richer installation management and doesn't require FTP credentials.
:::

Nube CLI supports syncing theme files over FTP. All FTP commands are under the `theme ftp` group:

```bash
tiendanube theme ftp <command>
```

## Setup

Configure your FTP connection:

```bash
tiendanube theme ftp setup \
  --ftp_server FTP_HOST \
  --ftp_username FTP_USER \
  --ftp_password FTP_PASSWORD \
  --store_url https://yourstore.mitiendanube.com
```

The CLI tests the FTP connection and saves the credentials to your `.nube` config file.

### Options

| Option | Description |
| --- | --- |
| `--ftp_server <host>` | **Required.** FTP server hostname |
| `--ftp_username <user>` | **Required.** FTP username |
| `--ftp_password <pass>` | **Required.** FTP password |
| `--store_url <url>` | **Required.** Your storefront URL |
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

Like the Public API watch mode, this monitors your local files and pushes changes automatically. It also handles file deletions. If a `storeUrl` is configured, it can open and reload a browser window to preview your changes.

### Options

| Option | Description |
| --- | --- |
| `--no-browser` | Don't open or reload a browser window |
| `-v` | Enable verbose output |

## FTP vs Public API

| Feature | FTP | Public API |
| --- | --- | --- |
| Pull / Push / Watch | Yes | Yes |
| Installation management | No | Yes |
| Fork / Clone / Publish | No | Yes |
| Preview URLs | No | Yes |
| Authentication | FTP credentials | OAuth bearer token |
| Recommended for new projects | No | Yes |
