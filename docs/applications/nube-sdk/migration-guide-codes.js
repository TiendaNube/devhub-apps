// Code examples for the migration guide.
// Kept in a separate file because MDX v1 cannot parse TypeScript/JSX
// syntax inside template literals in JSX props.

export const entryPoint = {
  before: `// Legacy: script runs directly in the page
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // your app logic
  });
})();`,
  after: `import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // your app logic — executed automatically by the SDK
}`,
};

export const pageChanges = {
  before: `// Legacy: check URL to know which page you're on
if (window.location.pathname.includes("/product/")) {
  // product page logic
}`,
  after: `nube.on("location:updated", ({ location }) => {
  if (location.page?.type === "product") {
    const product = location.page.data.product;
    console.log("Product page:", product.name);
  }
});`,
};

export const userInteractions = {
  before: `// Legacy: click handler on a DOM element
document.querySelector(".buy-button").addEventListener("click", () => {
  // logic when buy button is clicked
});`,
  after: `// NubeSDK: react when the cart changes
nube.on("cart:update", ({ cart }) => {
  console.log("Cart now has", cart.items.length, "items");
  console.log("Total:", cart.prices.total);
});`,
};

export const injectingUI = {
  before: `// Legacy: inject a banner after the line items
const banner = document.createElement("div");
banner.innerHTML = '<p style="padding:16px">Thank you!</p>';
document.querySelector(".line-items")?.after(banner);`,
  after: `import { Box, Text } from "@tiendanube/nube-sdk-jsx";

nube.render("after_line_items", () => (
  <Box padding="16px">
    <Text>Thank you for your purchase!</Text>
  </Box>
));`,
};

export const dynamicUI = {
  before: `// Legacy: read cart total from DOM and show a message
const totalEl = document.querySelector(".cart-total");
const total = parseFloat(totalEl?.textContent?.replace("$", "") ?? "0");

if (total > 100) {
  const msg = document.createElement("p");
  msg.textContent = "You qualify for free shipping!";
  totalEl?.after(msg);
}`,
  after: `import { Text } from "@tiendanube/nube-sdk-jsx";

nube.render("after_line_items", (state) => {
  if (state.cart.prices.total > 100) {
    return <Text>You qualify for free shipping!</Text>;
  }
  return null;
});`,
};

export const styling = {
  before: `// Legacy: inject custom styles into the page
const style = document.createElement("style");
style.textContent = \`
  .my-badge {
    background: #e91e63;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
  }
\`;
document.head.appendChild(style);

const badge = document.createElement("span");
badge.className = "my-badge";
badge.textContent = "NEW";
document.querySelector(".product-title")?.prepend(badge);`,
  after: `import { Text } from "@tiendanube/nube-sdk-jsx";
import { styled, theme } from "@tiendanube/nube-sdk-ui";

const Badge = styled(Text)\`
  background: \${theme.color.accent};
  color: white;
  padding: 4px 8px;
  border-radius: \${theme.border.radius};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
\`;

nube.render("before_product_detail_name", () => <Badge>NEW</Badge>);`,
};

export const cartData = {
  before: `// Legacy: scrape the cart total from the page
const priceText = document.querySelector(".total-price")?.textContent;
const total = parseFloat(priceText?.replace(/[^0-9.]/g, "") ?? "0");
console.log("Cart total:", total);`,
  after: `// NubeSDK: cart data is available in the state
const { cart } = nube.getState();
console.log("Cart total:", cart.prices.total);
console.log("Items:", cart.items.length);
console.log("Subtotal:", cart.prices.subtotal);
console.log("Shipping:", cart.prices.shipping);`,
};

export const cartValidation = {
  before: `// Legacy: block the checkout form from submitting
document.querySelector("#checkout-form")
  ?.addEventListener("submit", (e) => {
    const items = document.querySelectorAll(".cart-item").length;
    if (items < 3) {
      e.preventDefault();
      alert("You need at least 3 items to continue");
    }
  });`,
  after: `// Step 1: Tell NubeSDK your app validates the cart
nube.send("config:set", () => ({
  config: { has_cart_validation: true },
}));

// Step 2: React to cart changes and send validation result
nube.on("cart:update", ({ cart }) => {
  const status = cart.items.length < 3 ? "fail" : "success";
  const reason = status === "fail"
    ? "You need at least 3 items to continue"
    : undefined;
  nube.send("cart:validate", () => ({
    cart: { validation: { status, reason } },
  }));
});`,
};

export const httpRequests = {
  before: `// Legacy: fetch data and inject into the page
fetch("https://api.example.com/promotions")
  .then((res) => res.json())
  .then((data) => {
    const el = document.createElement("div");
    el.textContent = data.message;
    document.body.appendChild(el);
  });`,
  after: `import { Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  fetch("https://api.example.com/promotions")
    .then((res) => res.json())
    .then((data) => {
      nube.render("before_main_content", () => (
        <Text>{data.message}</Text>
      ));
    });
}`,
};

export const localStorage = {
  before: `// Legacy: store a flag in localStorage
localStorage.setItem("promo_seen", "true");
const seen = localStorage.getItem("promo_seen");`,
  after: `const browser = nube.getBrowserAPIs();

// Store a value (returns a Promise)
await browser.asyncLocalStorage.setItem("promo_seen", "true");

// Retrieve it
const seen = await browser.asyncLocalStorage.getItem("promo_seen");

// Store a value that expires in 60 seconds
await browser.asyncLocalStorage.setItem("promo_seen", "true", 60);`,
};

export const navigation = {
  before: `// Legacy: redirect to a different page
window.location.href = "/products";`,
  after: `const browser = nube.getBrowserAPIs();
browser.navigate("/products");`,
};

export const shippingPayment = {
  before: `// Legacy: detect shipping option changes
document.querySelector("#shipping-options")
  ?.addEventListener("change", (e) => {
    console.log("Shipping changed to:", e.target.value);
  });`,
  after: `nube.on("shipping:update", ({ shipping }) => {
  if (shipping?.selected) {
    console.log("Shipping method changed to:", shipping.selected);
  }
});

nube.on("payment:update", ({ payment }) => {
  console.log("Payment method changed to:", payment?.selected?.name);
});`,
};

export const customerData = {
  before: `// Legacy: read customer email from a form field
const email = document.querySelector("#contact-email")?.value;
console.log("Customer email:", email);`,
  after: `nube.on("customer:update", ({ customer }) => {
  console.log("Customer email:", customer?.contact?.email);
  console.log("Shipping address:", customer?.shipping_address);
});`,
};

export const addToCart = {
  before: `// Legacy: submit a form to add to cart
Tiendanube.addToCart({ variant_id: 123, quantity: 1 });`,
  after: `nube.send("cart:add", () => ({
  cart: {
    items: [{ variant_id: 123, product_id: 321, quantity: 1 }],
  },
}));

nube.on("cart:add:success", ({ cart }) => {
  console.log("Item added!");
});

nube.on("cart:add:fail", ({ cart }) => {
  console.log("Failed to add item");
});`,
};

export const orderTracking = {
  before: `// Legacy: scrape order data from the success page
const orderId = document.querySelector(".order-id")?.textContent;
analytics.track("purchase", { orderId });`,
  after: `nube.on("order:update", ({ order }) => {
  console.log("Order completed:", order.id);
  // Send to analytics, fire conversion pixels, etc.
});`,
};
