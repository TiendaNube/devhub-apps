---
title: NubeSDK Tools
sidebar_position: 6
---

# NubeSDK Tools

Nube CLI includes tooling to help theme developers prepare their templates for [NubeSDK](../applications/nube-sdk/overview) compatibility.

## Validate Slots

The `nubesdk validate-slots` command scans your theme's `.tpl` template files and checks for NubeSDK slot coverage. This helps you verify that your templates include the required slot anchors where NubeSDK apps can render their UI.

```bash
tiendanube nubesdk validate-slots
```

By default, the command scans the current directory recursively for `.tpl` files.

### Options

| Option | Description |
| --- | --- |
| `--dir <path>` | Directory to scan (defaults to the current working directory) |
| `--output-file <name>` | Save the results to a Markdown file in the theme root (file name only, the `.md` extension is added automatically) |

### Example

Scan a specific directory and save the report:

```bash
tiendanube nubesdk validate-slots --dir ./templates --output-file slot-report
```

This scans all `.tpl` files in the `./templates` directory and writes the results to `slot-report.md`.

:::tip
Run this command after making changes to your theme templates to ensure NubeSDK apps can render correctly on your storefront. For more information about slots, see the [UI Slots documentation](../applications/nube-sdk/slots/overview).
:::
