---
title: Migration Guide
---
# Guide to Migrating Apps to SDK in the Storefront Context

## Context

Tiendanube's new themes, starting with the Patagonia theme, mark the beginning of a new era for e-commerce.

Created to overcome past technical limitations, it offers a modern, flexible, and high-performance foundation that allows brands to express their full visual potential without code or complex processes.

With it, every store can be unique, combining creative freedom and speed to grow.

**Nube SDK** is the new development environment that allows partners to create applications compatible with checkout and the new store editor, ensuring stability, performance, and visual consistency within stores. Instead of each app connecting to the storefront independently—which generated conflicts, affected speed, and could sometimes break the user experience—the SDK offers a secure and standardized framework to integrate functionalities directly into the new editor and stores interface.

### What Changes with NubeSDK?

👉🏻 [Documentation](/docs/applications/nube-sdk/overview)

NubeSDK completely redefines how apps are developed on Tiendanube:

- Runs inside a **Web Worker** for security and isolation
  > To use Nube SDK, scripts must be migrated to our CDN.

- Uses **events** to communicate with checkout or storefront
  > (Available only for Patagonia, Tiendanube's new theme)

- UI is declared **declaratively or with JSX**, you don't have direct DOM access

- Renders in predetermined **slots** using `nube.render()`

- Has restricted access to APIs compatible with Web Workers.

---

## 1. Migrate Your App to the SDK Model

### GPT Assistant

[Use the Nube SDK app creation and migration specialist](https://chatgpt.com/g/g-6812298534c88191be0705ba82fea093-nubesdk-assistant)

Write a prompt like the following example and follow the Assistant's steps:

> "Analyze the shared code and suggest the steps to convert the legacy script to Nube SDK. This is an application for Storefronts that will be migrated to the Patagonia theme. [JS Code]"

### Basic App Structure

Make sure you have a main entry file (for example `src/main.tsx`) with the following form:

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // Your main logic goes here
}
```

This function will be executed automatically by the SDK.

---

## 2. Prepare Your Environment

Use the `npm create nube-app@latest` command to set up all the development environment needed to start working.

[More details](/docs/applications/nube-sdk/getting-started)

---

## 3. Enable SDK Usage in the Partner Portal

When registering or editing your app in the Partner Portal, activate the **"Uses NubeSDK"** option so it runs inside a secure worker.

Remember that scripts must be hosted on our CDN to execute.

---

## 4. Start Listening to Events

Migrate your environment interactions this way:

### Before (classic example):

```javascript
document.querySelector('.buy-button').addEventListener('click', () => {
  // logic...
});
```

### Now (NubeSDK):

```typescript
nube.on("location:update", ({ location }) => {
  if (location.page.type === "product") {
    // logic at checkout start
  }
});
```

Check the available events in the [events documentation](https://dev.tiendanube.com/docs/applications/nube-sdk/events).

---

## 5. Render UI with nube.render

Migrate any code that directly manipulated the DOM using declarative components:

```tsx
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

nube.render("after_line_items", () => (
  <Box padding="16px">
    <Text>Thank you for your purchase!</Text>
  </Box>
));
```

**Don't use** `document.createElement` or `innerHTML`.

---

## 6. Validation and Configuration

If your app needs to block checkout or modify behavior, you can send initial configurations:

```typescript
nube.send("config:set", () => ({
  config: {
    has_cart_validation: true,
  },
}));
```

And then react:

```typescript
nube.on("cart:update", ({ cart }) => {
  if (cart.items.length === 0) {
    nube.send("cart:validate", () => ({
      cart: {
        validation: {
          status: "fail",
          reason: "Cart cannot be empty",
        },
      },
    }));
  }
});
```

---

## 7. Use DevTools for Debugging

Install **Nube DevTools** to see:

- Which apps are running
- Which components are in each slot
- Which events are being fired
- What state the app has

---

## 8. Migration Checklist

- [ ] You have an `App(nube: NubeSDK)` function as entry point
- [ ] All UI is declared with SDK components (JSX or `@tiendanube/nube-sdk-ui`)
- [ ] All logic uses `nube.on`, `nube.send`, `nube.render`
- [ ] You don't use `window`, `document`, or external libraries like React
- [ ] You're running in dev and the script points to `localhost:8080/main.min.js`
- [ ] The script has the **NubeSDK flag** enabled in the Partner Portal

---

## 📘 Useful Resources

- [**Official documentation**](/docs/applications/nube-sdk/overview)
- [**Available components**](/docs/applications/nube-sdk/components/overview)
- [**Events list**](/docs/applications/nube-sdk/events)
- [**Slots list**](/docs/applications/nube-sdk/ui-slots)
- **What to do if you're missing a component, slot, or event?** Send an email to [api@tiendanube.com](mailto:api@tiendanube.com) with your request sharing as much detail as possible, ideally accompanied by visual support.
- **Technical support email:** [api@tiendanube.com](mailto:api@tiendanube.com)
