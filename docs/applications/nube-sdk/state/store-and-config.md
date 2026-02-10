---
title: Store, Device & Config
---

### `store: Store`

Information about the current store, such as its domain, currency, and language.

| Property   | Type                 | Required | Description                            |
| ---------- | -------------------- | -------- | -------------------------------------- |
| `id`       | number               | Yes      | Unique identifier for the store.       |
| `name`     | string               | Yes      | Name of the store.                     |
| `domain`   | string               | Yes      | Domain name associated with the store. |
| `currency` | string               | Yes      | Currency code (e.g. "USD", "EUR").     |
| `language` | "es" or "pt" or "en" | Yes      | Language code of the store.            |

For the exact TypeScript definition, use `Store` from `@tiendanube/nube-sdk-types`.

### `device: Device`

Information about the device being used to access the application, including screen dimensions and device type.

| Property | Type                  | Required | Description                                  |
| -------- | --------------------- | -------- | -------------------------------------------- |
| `screen` | DeviceScreen          | Yes      | Screen dimensions, orientation, pixel ratio. |
| `type`   | "mobile" or "desktop" | Yes      | The type of device.                          |

**DeviceScreen** (`device.screen`):

| Property      | Type                      | Required | Description                           |
| ------------- | ------------------------- | -------- | ------------------------------------- |
| `width`       | number                    | Yes      | Width of the screen in pixels.        |
| `height`      | number                    | Yes      | Height of the screen in pixels.       |
| `orientation` | "portrait" or "landscape" | Yes      | Orientation of the screen.            |
| `pixelRatio`  | number                    | Yes      | Pixel ratio of the screen.            |
| `innerWidth`  | number                    | Yes      | Width of the inner window in pixels.  |
| `innerHeight` | number                    | Yes      | Height of the inner window in pixels. |

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Device`, `DeviceScreen`).

### `config: AppConfig`

Application-wide configuration settings, including cart validation rules.

| Property                        | Type    | Required | Description                                               |
| ------------------------------- | ------- | -------- | --------------------------------------------------------- |
| `has_cart_validation`           | boolean | Yes      | Determines whether cart validation is enabled.            |
| `disable_shipping_more_options` | boolean | Yes      | Determines whether the user can select a shipping option. |

For the exact TypeScript definition, use `AppConfig` from `@tiendanube/nube-sdk-types`.
