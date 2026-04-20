---
title: Theme Installations
sidebar_position: 4
---

# Theme Installations

Theme installations are instances of a theme on your store. You can have multiple installations — for example, a production theme and one or more draft versions you're working on. Nube CLI lets you manage these installations directly from your terminal.

All installation commands are under the `theme installation` group:

```bash
tiendanube theme installation <command>
```

## List

List all theme installations on your store:

```bash
tiendanube theme installation list
```

By default, the output is displayed as a formatted table. Use `--json` for machine-readable JSON output:

```bash
tiendanube theme installation list --json
```

### Options

| Option | Description |
| --- | --- |
| `--json` | Output as JSON instead of a table |
| `-v` | Enable verbose output |

## Create

Create a new theme installation from a theme code:

```bash
tiendanube theme installation create --theme_code THEME_CODE --title "My Theme"
```

### Options

| Option | Description |
| --- | --- |
| `--theme_code <code>` | **Required.** The theme code to create an installation from |
| `--title <name>` | **Required.** A human-readable name for the installation |
| `-v` | Enable verbose output |

## Checkout

Save a specific installation ID in your `.nube` config so it becomes the default for all subsequent commands:

```bash
tiendanube theme installation checkout --installation_id INSTALLATION_ID
```

After checking out, commands like `theme pull`, `theme push`, and `theme watch` automatically use this installation without needing `--installation_id`.

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | **Required.** The installation ID to set as default |
| `-v` | Enable verbose output |

## Clone

Create a copy of an existing theme installation:

```bash
tiendanube theme installation clone
```

This clones the currently checked-out installation. You can target a specific installation with `--installation_id`.

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | The installation to clone (defaults to the checked-out installation) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

## Fork

Fork an installation to unlock full file editing:

```bash
tiendanube theme installation fork
```

By default, non-forked installations restrict file uploads to `custom/`, `templates/`, and `config/settings_data.json`. Forking removes these restrictions, allowing you to modify any file in the theme.

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | The installation to fork (defaults to the checked-out installation) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

:::info
Forking is a one-way operation. Once forked, an installation cannot be un-forked.
:::

## Publish

Publish an installation, making it the active (productive) theme on your store:

```bash
tiendanube theme installation publish
```

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | The installation to publish (defaults to the checked-out installation) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

:::warning
Publishing replaces the currently active theme on your store. Make sure you've tested your changes with a preview before publishing.
:::

## Preview URL

Get a preview URL for an installation without making it live:

```bash
tiendanube theme installation preview-url
```

This prints a URL in the format `{store_url}?theme_installation_id={id}` that you can open in your browser to see the installation without publishing it.

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | The installation to preview (defaults to the checked-out installation) |

## Delete

Delete a theme installation:

```bash
tiendanube theme installation delete
```

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | The installation to delete (defaults to the checked-out installation) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

:::warning
Deleting an installation is permanent and cannot be undone. You cannot delete the currently published installation.
:::

## Quick reference

| Command | Description |
| --- | --- |
| `theme installation list` | List all installations |
| `theme installation create` | Create a new installation |
| `theme installation checkout` | Set a default installation |
| `theme installation clone` | Clone an installation |
| `theme installation fork` | Fork for full file access |
| `theme installation publish` | Make an installation live |
| `theme installation preview-url` | Get a preview link |
| `theme installation delete` | Delete an installation |
