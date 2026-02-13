---
title: Location
---

## `location: AppLocation`

The user's current location within the application, including the page type and URL. Each key in `queries` is a query parameter name; each value is that parameter's value.

| Property  | Type                         | Always present | Description                                    |
| --------- | ---------------------------- | -------------- | ---------------------------------------------- |
| `url`     | string                       | Yes      | The current URL of the application.            |
| `page`    | Page                         | Yes      | The current page type and its associated data. |
| `queries` | Record&lt;string, string&gt; | Yes      | Query parameters extracted from the URL.       |

**Page** (`location.page`) is a discriminated union: the shape of `page.data` depends on `page.type`. Use `page.type` to narrow the type before reading `page.data`.

| page.type       | page.data shape                   | Description                           |
| --------------- | --------------------------------- | ------------------------------------- |
| `"home"`        | Home                              | Homepage (optional sections).         |
| `"checkout"`    | Checkout                          | Checkout step and flow.               |
| `"product"`     | ProductPageData                   | Product detail and optional sections. |
| `"category"`    | Category and product list         | Category and optional products.       |
| `"products"`    | Category (id: 0) and product list | All-products page.                    |
| `"search"`      | Search and product list           | Search query and optional products.   |
| `"account"`     | Account                           | Account page data.                    |
| `"custom_page"` | CustomPageData                    | Custom page name.                     |

**Checkout** (`page.data` when `page.type === "checkout"`):

| Property | Type   | Always present | Description                             |
| -------------- | ------ | -------------- | --------------------------------------- |
| `step`   | string | Yes      | `"start"`, `"payment"`, or `"success"`. |

**Home** (`page.data` when `page.type === "home"`): `undefined` or an object with optional `sections` (see WithSections).

**ProductPageData** (`page.data` when `page.type === "product"`):

| Property   | Type                       | Always present | Description               |
| ---------- | -------------------------- | -------------- | ------------------------- |
| `product`  | ProductDetails             | Yes      | The product being viewed. |
| `sections` | Section&lt;"product"&gt;[] | No       | Optional sections.        |

**Category** (used when `page.type === "category"` or `"products"`):

| Property | Type   | Always present | Description                                    |
| -------------- | ------ | -------------- | ---------------------------------------------- |
| `id`     | number | Yes      | Category id (0 for "products" = all products). |
| `name`   | string | Yes      | Category name.                                 |

**Search** (`page.data` when `page.type === "search"`):

| Property | Type   | Always present | Description          |
| -------------- | ------ | -------------- | -------------------- |
| `q`      | string | Yes      | Search query string. |

**WithProductList** (category and search pages may include): optional `products?: ProductDetails[]`.

**WithSections&lt;T&gt;** (home and product pages may include): optional `sections?: Section&lt;T&gt;[]`.

**CustomPageData** (`page.data` when `page.type === "custom_page"`):

| Property | Type   | Always present | Description       |
| -------------- | ------ | -------------- | ----------------- |
| `name`   | string | Yes      | Custom page name. |

For the exact TypeScript definitions (including `Page`, `AppLocation`, `ProductDetails`, `Section`, `Account`, and all page data types), use the types from `@tiendanube/nube-sdk-types`.
