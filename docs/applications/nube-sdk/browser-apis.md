---
title: Browser API's
---

By default, the WebWorks runtime in the browser does not provide direct access to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) or [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage). These APIs are part of the main thread's window context and are not natively available inside web workers.

To overcome this limitation and enable NubeSDK applications to use these storage APIs transparently, the NubeSDK includes an internal mechanism that exposes both `localStorage` and `sessionStorage` within the worker environment.

## localStorage and sessionStorage

The `nube` object exposes a method called `getBrowserAPIs`, which returns an interface with support for asynchronous access to browser APIs. These include `asyncLocalStorage` and `asyncSessionStorage`, which return promises for use within asynchronous contexts.

### How to Use

The next example uses the `setItem` method from `asyncSessionStorage` to store a new value.

```typescript title="main.ts"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
	const browser = nube.getBrowserAPIs();

	browser.asyncSessionStorage.setItem("my_custom_field", "Hello World!").then(() => {
		console.log("Item set in async session storage");
	});
}
```

The next example uses the `getItem` method from `asyncSessionStorage` to retrieve a stored value.

```typescript title="main.ts"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
	const browser = nube.getBrowserAPIs();

	browser.asyncSessionStorage.getItem("my_custom_field").then((value) => {
		console.log("my_custom_field", value);
	});
}
```

### Time To Live

Both `asyncLocalStorage` and `asyncSessionStorage` support an optional third parameter called `ttl` (time-to-live), which defines how long the stored value should remain valid, in seconds.

When provided, the `ttl` determines the expiration time for the key. Once the specified duration has passed, the value will no longer be accessible via `getItem`, and it will be treated as if it were removed.

```typescript title="main.ts"
// Store a value that expires in 60 seconds
await browser.asyncLocalStorage.setItem("my_custom_field", "Hello World!", 60);
```

If no `ttl` is provided, the value will persist indefinitely, following the default behavior of `localStorage` and `sessionStorage`.

- Learn more about [Components](./components/overview)
- Learn more about [Slots](./slots/overview)

## navigate

The `nube` object also provides a `navigate` method through the `getBrowserAPIs()` interface, which allows you to programmatically navigate to different routes within your Nube app.

### How to Use

The `navigate` method accepts a path string as its parameter and returns void.

```typescript title="main.ts"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
	const browser = nube.getBrowserAPIs();

	// Navigate to a specific route
	browser.navigate("/products");
	console.log("Navigation initiated");
}
```

The `navigate` method is particularly useful when you need to:
- Redirect users after completing certain actions
- Implement custom navigation logic in your application
- Handle programmatic navigation based on user interactions

:::warning
The `navigate` method only allows navigation within the current domain and does not support external URLs or cross-origin navigation.
:::

## postMessageToIframe

The `postMessageToIframe` method allows you to send messages from your app to an embedded iframe component. This enables bidirectional communication between your application and the content loaded within the iframe.

### How to Use

The `postMessageToIframe` method accepts two parameters:
- The `Iframe` component instance
- A message object containing the data you want to send

```typescript title="main.ts"
import { Iframe } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
	const Component = (
		<Iframe
			src="https://tiendanube.com/"
			height={300}
			onMessage={(event) => {
				console.log(event.value);
			}}
		/>
	);

	nube.render("before_main_content", Component);

	const browser = nube.getBrowserAPIs();
	browser.postMessageToIframe(Component, {
		message: "Hello World",
	});
}
```

The `postMessageToIframe` method is particularly useful when you need to:
- Send data or commands to the embedded iframe content
- Synchronize state between your app and the iframe
- Trigger actions within the iframe from your application

:::info
To receive messages from the iframe, use the `onMessage` prop on the `Iframe` component. Learn more about [Iframe component](./components/iframe).
:::
