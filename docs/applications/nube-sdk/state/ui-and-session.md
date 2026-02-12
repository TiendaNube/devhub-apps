---
title: UI, Session & Event Payload
---

## `ui: UI`

Represents UI-related state, including dynamically injected components and their values.

| Property | Type                                               | Required | Description                                                                                                                           |
| -------- | -------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `slots`  | Partial&lt;Record&lt;UISlot, NubeComponent&gt;&gt; | Yes      | Map of slot names to components. Manage with `nube.render()` and `nube.clearSlot()`. See [UI Slots](../slots/overview) for slot names. |
| `values` | Record&lt;string, string&gt;                       | Yes      | Values for UI components (e.g. form inputs). Managed internally by the SDK; modifying directly may cause unexpected behavior.         |

Slot names (`UISlot`) include common slots (e.g. `before_main_content`, `modal_content`, `corner_*`), checkout slots (e.g. `before_line_items`, `after_contact_form`), and storefront slots (e.g. `product_grid_item_image_top_left`, `before_start_checkout_button`). For the full list, see [UI Slots](../slots/overview).

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `UI`, `UISlots`, `UISlot`).

## `eventPayload: Nullable<Record<string, unknown>>`

Optional event payload data that may be available when certain events are triggered.

This property contains additional context about specific events, such as product information when a quick buy modal is opened or closed, or item details when cart operations succeed. Type: `Record<string, unknown> | null`.

## `session: Session`

Session information, including the session identifier.

| Property | Type           | Required | Description                        |
| -------- | -------------- | -------- | ---------------------------------- |
| `id`     | string or null | No       | Unique identifier for the session. |

For the exact TypeScript definition, use `Session` from `@tiendanube/nube-sdk-types`.
