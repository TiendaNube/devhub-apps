---
title: Theme Installations
sidebar_position: 4
---

# Theme Installations

A **theme installation** is a store-scoped instance of a theme — a working copy with its own files, settings, and state. Your store has one that is **productive** (live on the storefront) and can have a second one that serves as a draft or experiment.

:::warning Two installations at a time
A store can have a maximum of **two installations** at any given moment. If you've reached the limit and want to start a new one, [delete](#delete) an existing non-productive installation first to free up the slot.
:::

The Tiendanube/Nuvemshop CLI lets you manage the full lifecycle of installations from your terminal:

```
create → pull → push/watch → fork (optional) → publish → delete
```

`theme pull --installation-id <id>` saves the installation ID in `.nuvem`, so subsequent commands target it without needing `--installation-id` each time.

All installation commands are under the `theme installation` group:

```bash
tiendanube theme installation <command>
```

:::info
Before using these commands, run `theme authorize` to connect the CLI to your store. See [Fork workflow](./api-workflow) for setup instructions.
:::

## List

List all theme installations on your store:

```bash
tiendanube theme installation list
```

The output shows each installation's ID, title, theme version, whether it's productive (live), and whether it's been forked. Use `--json` for machine-readable output:

```bash
tiendanube theme installation list --json
```

### Options

| Option | Description |
| --- | --- |
| `--json` | Output as JSON instead of a table |
| `-v` | Enable verbose output |

## Create

Create a new installation from a theme code:

```bash
tiendanube theme installation create --theme-code THEME_CODE --title "My Theme"
```

This creates a fresh installation based on the specified theme's default files and settings. The `theme_code` identifies the base theme in the Tiendanube theme catalog.

### Options

| Option | Description |
| --- | --- |
| `--theme-code <code>` | **Required.** The theme code to create an installation from |
| `--title <name>` | **Required.** A human-readable name for the installation |
| `-v` | Enable verbose output |

## Selecting the active installation

There is no separate `checkout` command. The CLI links a directory to an installation when you run:

```bash
tiendanube theme pull --installation-id INSTALLATION_ID
```

After a successful pull, the installation ID is saved in `.nuvem`. Subsequent commands like `theme push`, `theme watch`, and `theme installation publish/fork/clone/delete/preview-url` automatically target this installation when `--installation-id` is omitted.

To check which installation the current directory is linked to:

```bash
tiendanube theme installation get-current
```

## Clone

Create an identical copy of an existing installation:

```bash
tiendanube theme installation clone
```

Unlike **create** (which starts from the base theme's defaults), **clone** duplicates an existing installation — including any file modifications, settings changes, and customizations you've made. This is useful when you want to experiment with changes without affecting your current work.

### Options

| Option | Description |
| --- | --- |
| `--installation-id <id>` | The installation to clone (defaults to the installation linked to this directory) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

## Fork

Fork an installation to unlock full file access:

```bash
tiendanube theme installation fork
```

### Why forking exists

An Ipanema theme installation separates **theme code** from **customizations**. The theme code is the core of the theme — the layouts, section templates, blocks, styles, and scripts that define how the storefront looks and behaves. Customizations are the parts that vary per store — which sections appear on each page, their settings, and any custom files.

The file tree of a pulled installation looks like this:

```
my-theme/
├── blocks/            ← Theme code: block templates (.tpl)
├── config/
│   ├── settings_schema.json   ← Theme code: defines available settings
│   └── settings_data.json     ← Customization: merchant's saved values
├── layouts/           ← Theme code: main HTML shell
├── locales/           ← Theme code: translation files
├── sections/          ← Theme code: section templates (.tpl)
├── snippets/          ← Theme code: shared partials (.tpl)
├── static/            ← Theme code: CSS, JS, assets
├── templates/         ← Customization: page templates (.json)
└── custom/            ← Customization: developer-added files
```

By default, a non-forked installation **protects the theme code** and only lets you modify the customization layer:

| Allowed without fork | What it contains |
| --- | --- |
| `templates/` | Page templates (`.json`) — define which sections appear on each page, their order, and their settings |
| `custom/` | Custom files added by the developer |
| `config/settings_data.json` | The merchant's saved settings values |

This means you can rearrange sections on a page, change settings, or add custom files — but you can't touch the `.tpl` templates, styles, scripts, or any other core file.

**Forking** removes this restriction. Once forked, the CLI allows you to push **any file** in the theme — including layouts, sections, blocks, snippets, static assets, and the settings schema.

### When to fork

**Don't fork** if you only need to:
- Change which sections appear on a page (edit `templates/*.json`)
- Adjust section settings (edit `templates/*.json` or `config/settings_data.json`)
- Add custom files (add files under `custom/`)

This is the safer path — your installation stays compatible with future theme updates.

**Fork** when you need to:
- Edit a section's HTML/Twig logic (`sections/*.tpl`)
- Modify block templates (`blocks/*.tpl`)
- Change the layout shell (`layouts/layout.tpl`)
- Update styles or scripts (`static/`)
- Add or modify translations (`locales/`)
- Change the settings schema (`config/settings_schema.json`)

### Options

| Option | Description |
| --- | --- |
| `--installation-id <id>` | The installation to fork (defaults to the installation linked to this directory) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

:::warning
Forking is a **one-way operation**. Once forked, an installation cannot be un-forked. If you fork an already-forked installation, the CLI treats it as a no-op.
:::

:::info
Only **sections-based themes** (like Ipanema) can be forked. The API will reject fork requests for non-sectionable themes.
:::

## Publish

Make an installation the **productive** (live) theme on your storefront:

```bash
tiendanube theme installation publish
```

Publishing makes the installation visible to all visitors. The previously productive installation is demoted — it still exists but is no longer live.

### Options

| Option | Description |
| --- | --- |
| `--installation-id <id>` | The installation to publish (defaults to the installation linked to this directory) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

:::warning
Publishing replaces the currently live theme. Always test your changes with a [preview](#preview-url) before publishing.
:::

## Preview URL

Get a preview URL for an installation without making it live:

```bash
tiendanube theme installation preview-url
```

This outputs a URL in the format:

```
https://yourstore.mitiendanube.com?theme_installation_id=INSTALLATION_ID
```

Open it in your browser to see how the installation looks on the storefront. The preview is only visible to you — it doesn't affect what visitors see.

### Options

| Option | Description |
| --- | --- |
| `--installation-id <id>` | The installation to preview (defaults to the installation linked to this directory) |

## Delete

Delete a theme installation:

```bash
tiendanube theme installation delete
```

### Options

| Option | Description |
| --- | --- |
| `--installation-id <id>` | The installation to delete (defaults to the installation linked to this directory) |
| `-y` | Skip confirmation prompts |
| `-v` | Enable verbose output |

:::warning
Deleting an installation is permanent and cannot be undone. You cannot delete the currently productive installation.
:::

## Quick reference

| Command | Description |
| --- | --- |
| `theme installation list` | List all installations on the store |
| `theme installation create` | Create a new installation from a theme code |
| `theme installation get-current` | Show the installation linked to this directory |
| `theme installation clone` | Duplicate an existing installation |
| `theme installation fork` | Unlock full file access (one-way) |
| `theme installation publish` | Make an installation live on the storefront |
| `theme installation preview-url` | Get a preview link without publishing |
| `theme installation delete` | Permanently remove an installation |
