---
title: Theme Development
sidebar_position: 3
---

# Theme Development

Once your project is [set up](./getting-started), you can use `theme pull`, `theme push`, and `theme watch` to sync files between your local machine and a theme installation on your store.

## Pull

Download all theme files from a theme installation to your local working directory:

```bash
tiendanube theme pull
```

The CLI downloads every file in the installation and writes them to your current directory. It also generates a `manifest.json` with metadata about the installation.

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | Target a specific installation (defaults to the checked-out installation in `.nube`) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

:::warning
Pulling overwrites local files. If you have uncommitted changes, commit or stash them before pulling.
:::

## Push

Upload your local theme files to the theme installation:

```bash
tiendanube theme push
```

The CLI uploads all eligible files from your working directory to the installation.

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | Target a specific installation (defaults to the checked-out installation in `.nube`) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

### Fork rules

If the installation has **not been forked**, only files under these paths are allowed:

- `custom/`
- `templates/`
- `config/settings_data.json`

Forked installations allow uploading the full file tree. To fork an installation, see [Theme Installations — Fork](./theme-installations#fork).

## Watch

Watch your local files and automatically push changes on save:

```bash
tiendanube theme watch
```

The CLI uses file system watching to detect changes. When you save a file, it pushes the updated file to the installation. When you delete a file locally, it deletes it from the installation too.

If a `storeUrl` is configured and `--no-browser` is not set, the CLI also opens a browser window pointing to a preview of your theme installation and reloads it after each successful push.

### Options

| Option | Description |
| --- | --- |
| `--installation_id <id>` | Target a specific installation (defaults to the checked-out installation in `.nube`) |
| `--no-browser` | Don't open or reload a browser window |
| `-v` | Enable verbose output |

:::tip
Watch mode applies the same fork rules as `theme push`. If you need to modify files outside `custom/`, `templates/`, or `config/settings_data.json`, fork the installation first.
:::

## Typical development workflow

A common development cycle looks like this:

1. **Pull** the current theme files: `tiendanube theme pull`
2. **Start watch mode**: `tiendanube theme watch`
3. **Edit** templates, styles, and config files in your editor
4. **Preview** changes in the browser (automatically reloaded by watch mode)
5. **Push** the final version: `tiendanube theme push` (or let watch mode handle it)
6. **Publish** the installation when ready: `tiendanube theme installation publish`
