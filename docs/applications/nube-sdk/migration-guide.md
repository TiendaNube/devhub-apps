---
title: Migration Guide
hide_table_of_contents: true
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import BeforeAfter from '@site/src/components/BeforeAfter';
import {
entryPoint,
pageChanges,
userInteractions,
injectingUI,
dynamicUI,
styling,
cartData,
cartValidation,
httpRequests,
localStorage,
navigation,
shippingPayment,
customerData,
addToCart,
orderTracking,
} from './migration-guide-codes';

# Migrating Your App to NubeSDK

This guide shows you how to convert a classic Tiendanube/Nuvemshop script — one that uses `document`, `window`, jQuery, or direct DOM manipulation — into a NubeSDK app that runs inside a secure Web Worker.

Each section presents a **before** (legacy) and **after** (NubeSDK) comparison so you can map your existing code to the new model.

<Alert appearance="warning" title="Key differences at a glance">
  <Box display="flex" flexDirection="column" gap="2">
    <Text>NubeSDK apps run inside a <strong>Web Worker</strong>. There is no access to <code>document</code>, <code>window</code>, or any DOM API.</Text>
    <Text>UI is rendered <strong>declaratively</strong> into predefined <strong>slots</strong> using JSX or the declarative API.</Text>
    <Text>Communication with the store/checkout happens through <strong>events</strong>, not DOM listeners.</Text>
    <Text>Storefront apps require the <strong>Patagonia theme</strong>. Checkout apps work on all themes.</Text>
  </Box>
</Alert>

---

## 1. Entry point

Every NubeSDK app exports a single `App` function that receives the `nube` instance. This replaces your legacy IIFE, `DOMContentLoaded`, or global script.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={entryPoint.before}
  after={entryPoint.after}
/>

:::tip
Use `npm create nube-app@latest` to scaffold a project that is already configured with the right entry point, build tool, and types. See [Getting Started](./getting-started) for details.
:::

---

## 2. Reacting to page or route changes

Legacy scripts typically check `window.location` or listen to `popstate`. In NubeSDK you listen to **events** that tell you exactly which page the user is on and what data is available.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  afterLabel="AFTER (STOREFRONT)"
  before={pageChanges.before}
  after={pageChanges.after}
/>

For **checkout** apps, listen to `checkout:ready` instead:

```typescript
nube.on("checkout:ready", ({ location }) => {
  const { page } = location;

  if (page.type === "checkout" && page.data.step === "start") {
    // Checkout start page — contact form, address, shipping
  }

  if (page.type === "checkout" && page.data.step === "payment") {
    // Payment step
  }
});
```

Check the available events in the [events documentation](/docs/applications/nube-sdk/events/overview).

---

## 3. Listening to user interactions

In legacy scripts you'd query the DOM for elements and attach event listeners. NubeSDK provides **store events** instead — you react to data changes, not clicks on particular elements.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={userInteractions.before}
  after={userInteractions.after}
/>

:::info
There is no 1:1 equivalent of DOM click handlers. Instead, map your logic to the **data change** that the click produces. A click on "Buy" produces a `cart:update`; a click on "Select shipping" produces a `shipping:update`, etc.
:::

---

## 4. Injecting UI into the page

Instead of creating elements with `document.createElement` or injecting HTML with `innerHTML`, you **render components into slots**.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="tsx"
  afterLabel="AFTER (JSX)"
  before={injectingUI.before}
  after={injectingUI.after}
/>

You can also use the **declarative API** (no JSX required):

```typescript
import { box, txt } from "@tiendanube/nube-sdk-ui";

nube.render("after_line_items", () =>
  box({
    padding: "16px",
    children: [txt({ children: "Thank you for your purchase!" })],
  }),
);
```

:::tip
Don't know which slot to use? Check [Checkout Slots](./slots/checkout-slots) and [Storefront Slots](./slots/storefront-slots) for a full visual reference.
:::

---

## 5. Rendering dynamic UI based on state

In legacy apps you'd read DOM values or make API calls and then update elements. In NubeSDK, `nube.render()` can receive a **function** — the SDK calls it with the current state every time it changes.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="tsx"
  before={dynamicUI.before}
  after={dynamicUI.after}
/>

---

## 6. Styling

Legacy apps often inject `<style>` tags or add inline styles. NubeSDK provides `styled()`, `StyleSheet.create()`, and a **theme** system that adapts to each store.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="tsx"
  before={styling.before}
  after={styling.after}
/>

:::tip
Use `theme` tokens instead of hard-coded colours — your component will automatically match the store's theme. See [Styling](./styling/overview) for the complete token list.
:::

---

## 7. Reading and reacting to cart data

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={cartData.before}
  after={cartData.after}
/>

Or react to changes over time:

```typescript
nube.on("cart:update", ({ cart }) => {
  console.log("Cart changed — new total:", cart.prices.total);
});
```

---

## 8. Validating the cart / blocking checkout

Legacy scripts would prevent form submission or add alerts. NubeSDK uses a formal **config + validate** flow.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={cartValidation.before}
  after={cartValidation.after}
/>

---

## 9. Making HTTP requests

Legacy scripts use `XMLHttpRequest` or `fetch` on the main thread. The Worker environment supports `fetch` natively.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="tsx"
  before={httpRequests.before}
  after={httpRequests.after}
/>

---

## 10. Using localStorage / sessionStorage

Web Workers don't have direct access to `localStorage`. NubeSDK provides **async** equivalents.

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={localStorage.before}
  after={localStorage.after}
/>

---

## 11. Navigating programmatically

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={navigation.before}
  after={navigation.after}
/>

:::warning
`navigate` only works within the current domain. External URLs are not supported.
:::

---

## 12. Reacting to shipping and payment changes

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={shippingPayment.before}
  after={shippingPayment.after}
/>

---

## 13. Reacting to customer data

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={customerData.before}
  after={customerData.after}
/>

---

## 14. Adding items to the cart

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={addToCart.before}
  after={addToCart.after}
/>

---

## 15. Order tracking (checkout success page)

<BeforeAfter
  beforeLanguage="javascript"
  afterLanguage="typescript"
  before={orderTracking.before}
  after={orderTracking.after}
/>

---

## What you can't do in NubeSDK

Because your code runs in a Web Worker, these APIs are **not available**:

| Legacy API                        | Why it's not available | Alternative                                 |
| --------------------------------- | ---------------------- | ------------------------------------------- |
| `document` / `window`             | No DOM in workers      | Use `nube.render()` and events              |
| `localStorage` / `sessionStorage` | Main-thread API        | `nube.getBrowserAPIs().asyncLocalStorage`   |
| `window.location.href = ...`      | Main-thread API        | `nube.getBrowserAPIs().navigate(...)`       |
| `React`, `Vue`, `Angular`         | No DOM rendering       | Use NubeSDK components (JSX or declarative) |
| `jQuery`                          | No DOM                 | Use events and `nube.render()`              |
| `XMLHttpRequest`                  | Available but prefer   | `fetch()` (works in workers)                |

---

## Migration checklist

Use this list to track your progress:

- [ ] Created a project with `npm create nube-app@latest`
- [ ] Main entry file exports `App(nube: NubeSDK)`
- [ ] All UI is rendered through `nube.render()` — no `document.*` or `innerHTML`
- [ ] All logic uses `nube.on`, `nube.send`, `nube.getState`
- [ ] No references to `window`, `document`, jQuery, React, or other DOM libraries
- [ ] localStorage replaced with `asyncLocalStorage` / `asyncSessionStorage`
- [ ] Styling uses `styled()`, `StyleSheet.create()`, or theme tokens — no `<style>` injection
- [ ] Tested in dev mode (`npm run dev`) with the script pointing to `localhost:8080/main.min.js`
- [ ] **"Uses NubeSDK"** flag enabled in the Partner Portal
- [ ] App works on **Patagonia theme** (storefront) or any theme (checkout)

---

## Useful resources

- [Script Structure](./script-structure) — How `App(nube)` works
- [Events](./events/overview) — Full list of events
- [State](./state/overview) — Complete state reference
- [Components](./components/overview) — Available UI components
- [Slots: Checkout](./slots/checkout-slots) — Checkout slot reference
- [Slots: Storefront](./slots/storefront-slots) — Storefront slot reference
- [Styling](./styling/overview) — `styled()`, `StyleSheet`, and theme tokens
- [Browser APIs](./browser-apis) — localStorage, navigate, postMessage
- [Examples](./examples/overview) — Complete working examples
- [NubeSDK Assistant](https://gemini.google.com/gem/2cdd8c07de85?usp=sharing) — AI assistant for code conversion

**Need help?** Contact [api@tiendanube.com](mailto:api@tiendanube.com) / [api@nuvemshop.com.br](mailto:api@nuvemshop.com.br). Missing a component, slot, or event? Email with details and visual references.