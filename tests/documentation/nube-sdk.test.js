/**
 * Tests for Nube SDK documentation files
 * Validates structure, code examples, and technical content
 */

const fs = require('fs');
const path = require('path');

describe('Nube SDK Documentation', () => {
  const docsDir = path.join(__dirname, '../../docs/applications/nube-sdk');

  describe('Getting Started Documentation', () => {
    const gettingStartedPath = path.join(docsDir, 'getting-started.md');
    let content;

    beforeAll(() => {
      content = fs.readFileSync(gettingStartedPath, 'utf-8');
    });

    test('should exist', () => {
      expect(fs.existsSync(gettingStartedPath)).toBe(true);
    });

    test('should have frontmatter with title', () => {
      expect(content).toMatch(/^---\s*\n/);
      expect(content).toMatch(/title:\s*Getting Started/);
    });

    test('should include scaffolding instructions', () => {
      expect(content).toContain('## Scaffolding Your First Nube App');
      expect(content).toContain('create-nube-app');
    });

    test('should have compatibility note about Node.js version', () => {
      expect(content).toContain('Node.js version 16+');
      expect(content).toMatch(/:::info/);
      expect(content).toContain('Compatibility Note');
    });

    test('should include PkgTabs component usage', () => {
      expect(content).toContain("import PkgTabs from '@site/src/components/PkgTabs'");
      expect(content).toContain('<PkgTabs>');
      expect(content).toContain('</PkgTabs>');
    });

    test('should provide commands for multiple package managers', () => {
      const packageManagers = ['npm', 'Yarn', 'pnpm', 'Bun'];
      packageManagers.forEach(pm => {
        expect(content).toContain(pm);
      });
    });

    test('should include manual setup reference', () => {
      expect(content).toContain('[Manual Project Setup](./manual-setup)');
      expect(content).toMatch(/:::tip/);
    });

    test('should explain how to add script to application', () => {
      expect(content).toContain('## Adding script to your application');
      expect(content).toContain('Uses Nube SDK');
    });

    test('should have email contacts for enablement', () => {
      expect(content).toContain('api@tiendanube.com');
      expect(content).toContain('api@nuvemshop.com.br');
    });

    test('should reference NubeSDK flag image', () => {
      expect(content).toContain('![NubeSDK Flag]');
      expect(content).toContain('/img/pt/nube-sdk-flag.png');
    });

    test('should include development mode instructions', () => {
      expect(content).toContain('## Enabling development mode');
      expect(content).toContain('npm run dev');
      expect(content).toContain('localhost:8080');
    });

    test('should show how to verify development mode', () => {
      expect(content).toContain('nubeSDK.getState().apps');
      expect(content).toContain('```typescript');
      expect(content).toContain('```JSON');
    });

    test('should mention NubeSDK Assistant', () => {
      expect(content).toContain('## NubeSDK Assistant');
      expect(content).toContain('Gemini-powered');
      expect(content).toContain('gemini.google.com');
    });

    test('should have next steps section', () => {
      expect(content).toContain('## Next Steps');
      expect(content).toContain('[Script Structure](./script-structure)');
    });

    test('should not have broken markdown syntax', () => {
      // Check for unclosed code blocks
      const codeBlockCount = (content.match(/```/g) || []).length;
      expect(codeBlockCount % 2).toBe(0);

      // Check for unclosed info blocks
      const infoBlockOpen = (content.match(/:::info/g) || []).length;
      const infoBlockClose = (content.match(/:::/g) || []).length;
      expect(infoBlockClose).toBeGreaterThanOrEqual(infoBlockOpen);
    });
  });

  describe('State Documentation', () => {
    const statePath = path.join(docsDir, 'state.md');
    let content;

    beforeAll(() => {
      content = fs.readFileSync(statePath, 'utf-8');
    });

    test('should exist', () => {
      expect(fs.existsSync(statePath)).toBe(true);
    });

    test('should have frontmatter with title', () => {
      expect(content).toMatch(/^---\s*\n/);
      expect(content).toMatch(/title:\s*State/);
    });

    test('should explain NubeSDKState type', () => {
      expect(content).toContain('NubeSDKState');
      expect(content).toContain('represents the complete state');
    });

    test('should describe three ways to read state', () => {
      expect(content).toContain('## How to read the NubeSDKState');
      expect(content).toContain('### 1. The getState function');
      expect(content).toContain('### 2. Listening to State Changes');
      expect(content).toContain('### 3. Modifying State');
    });

    test('should document getState function', () => {
      expect(content).toContain('nube.getState()');
      expect(content).toContain('Readonly<NubeSDKState>');
    });

    test('should document state change listeners', () => {
      expect(content).toContain("nube.on('customer:update'");
      expect(content).toContain('[Events](./events)');
    });

    test('should document state modification', () => {
      expect(content).toContain("nube.send('ui:slot:set'");
      expect(content).toContain('DeepPartial<NubeSDKState>');
    });

    test('should document cart property', () => {
      expect(content).toContain('### `cart: Cart`');
      expect(content).toContain('type Cart = {');
      expect(content).toContain('items: CartItem[]');
      expect(content).toContain('prices: Prices');
    });

    test('should document order property', () => {
      expect(content).toContain('### `order?: Order`');
      expect(content).toContain('type Order = {');
      expect(content).toContain('success');
    });

    test('should document config property', () => {
      expect(content).toContain('### `config: AppConfig`');
      expect(content).toContain('has_cart_validation');
    });

    test('should document device property', () => {
      expect(content).toContain('### `device: Device`');
      expect(content).toContain('type Device = {');
      expect(content).toContain('screen: DeviceScreen');
      expect(content).toContain('type: DeviceType');
    });

    test('should document location property', () => {
      expect(content).toContain('### `location: AppLocation`');
      expect(content).toContain('type AppLocation = {');
      expect(content).toContain('url: string');
      expect(content).toContain('page: Page');
    });

    test('should document store property', () => {
      expect(content).toContain('### `store: Store`');
      expect(content).toContain('type Store = {');
      expect(content).toContain('currency: string');
      expect(content).toContain('language:');
    });

    test('should document ui property', () => {
      expect(content).toContain('### `ui: UI`');
      expect(content).toContain('slots: UISlots');
      expect(content).toContain('values: UIValues');
    });

    test('should document shipping property', () => {
      expect(content).toContain('### `shipping: Nullable<Shipping>`');
      expect(content).toContain('type Shipping = {');
      expect(content).toContain('options?: ShippingOption[]');
    });

    test('should document customer property', () => {
      expect(content).toContain('### `customer: Nullable<Customer>`');
      expect(content).toContain('type Customer = {');
      expect(content).toContain('contact:');
      expect(content).toContain('shipping_address');
      expect(content).toContain('billing_address');
    });

    test('should document payment property', () => {
      expect(content).toContain('### `payment: Nullable<Payment>`');
      expect(content).toContain('type Payment = {');
      expect(content).toContain('status: Nullable<PaymentStatus>');
    });

    test('should document eventPayload property', () => {
      expect(content).toContain('### `eventPayload: Nullable<Record<string, unknown>>`');
      expect(content).toContain('type EventPayload');
    });

    test('should have notes section', () => {
      expect(content).toContain('## Notes');
      expect(content).toContain('Nullable<T>');
      expect(content).toContain('immutable');
    });

    test('should have proper TypeScript syntax in code examples', () => {
      const codeBlocks = content.match(/```typescript[\s\S]*?```/g) || [];
      expect(codeBlocks.length).toBeGreaterThan(0);

      codeBlocks.forEach(block => {
        // Check for basic TypeScript syntax
        expect(block).toMatch(/type\s+\w+|interface\s+\w+|const\s+\w+/);
      });
    });
  });

  describe('Image Component Documentation', () => {
    const imagePath = path.join(docsDir, 'components/image.md');
    let content;

    beforeAll(() => {
      content = fs.readFileSync(imagePath, 'utf-8');
    });

    test('should exist', () => {
      expect(fs.existsSync(imagePath)).toBe(true);
    });

    test('should have frontmatter with title', () => {
      expect(content).toMatch(/^---\s*\n/);
      expect(content).toMatch(/title:\s*Image/);
    });

    test('should import Nimbus components', () => {
      expect(content).toContain("import { Alert, Text, Box } from '@nimbus-ds/components'");
      expect(content).toContain("import AppTypes from '@site/src/components/AppTypes'");
    });

    test('should describe component purpose', () => {
      expect(content).toContain('Used to display images');
      expect(content).toContain('src');
      expect(content).toContain('alt');
      expect(content).toContain('responsive');
    });

    test('should include visual reference image', () => {
      expect(content).toContain('![Image]');
      expect(content).toContain('/img/pt/nube-sdk-ui-img-1.png');
    });

    test('should have usage section with code example', () => {
      expect(content).toContain('### Usage');
      expect(content).toContain('```typescript title="Example"');
      expect(content).toContain('@tiendanube/nube-sdk-types');
      expect(content).toContain('@tiendanube/nube-sdk-jsx');
    });

    test('should show Image component import', () => {
      expect(content).toContain('import { Image, Box } from "@tiendanube/nube-sdk-jsx"');
    });

    test('should include example with Image component', () => {
      expect(content).toContain('<Image');
      expect(content).toContain('src="https://');
      expect(content).toContain('alt=');
      expect(content).toContain('/>');
    });

    test('should use ui:slot:set in example', () => {
      expect(content).toContain('nube.send("ui:slot:set"');
      expect(content).toContain('after_line_items');
    });

    test('should document properties table', () => {
      expect(content).toContain('### Properties');
      expect(content).toContain('| Property');
      expect(content).toContain('| Type');
      expect(content).toContain('| Required');
      expect(content).toContain('| Description');
    });

    test('should list required properties', () => {
      expect(content).toMatch(/\|\s*src\s*\|.*\|\s*Yes\s*\|/);
      expect(content).toMatch(/\|\s*alt\s*\|.*\|\s*Yes\s*\|/);
    });

    test('should list optional properties', () => {
      expect(content).toMatch(/\|\s*sources\s*\|.*\|\s*No\s*\|/);
      expect(content).toMatch(/\|\s*width\s*\|.*\|\s*No\s*\|/);
      expect(content).toMatch(/\|\s*height\s*\|.*\|\s*No\s*\|/);
      expect(content).toMatch(/\|\s*id\s*\|.*\|\s*No\s*\|/);
      expect(content).toMatch(/\|\s*style\s*\|.*\|\s*No\s*\|/);
    });

    test('should document ImageSource type', () => {
      expect(content).toContain('### ImageSource');
      expect(content).toMatch(/\|\s*src\s*\|.*\|\s*Yes\s*\|/);
      expect(content).toMatch(/\|\s*media\s*\|.*\|\s*No\s*\|/);
    });

    test('should mention HTTPS requirement', () => {
      expect(content).toContain('https://');
      expect(content).toContain('https only');
    });

    test('should have valid TypeScript code example', () => {
      const tsBlocks = content.match(/```typescript[\s\S]*?```/g) || [];
      expect(tsBlocks.length).toBeGreaterThan(0);

      tsBlocks.forEach(block => {
        // Check for function definition
        expect(block).toContain('function');
        // Check for return statement or JSX
        expect(block).toMatch(/return|<\w+/);
      });
    });
  });

  describe('Checkout Slots Documentation', () => {
    const checkoutSlotsPath = path.join(docsDir, 'slots/checkout-slots.md');
    let content;

    beforeAll(() => {
      content = fs.readFileSync(checkoutSlotsPath, 'utf-8');
    });

    test('should exist', () => {
      expect(fs.existsSync(checkoutSlotsPath)).toBe(true);
    });

    test('should have frontmatter with title', () => {
      expect(content).toMatch(/^---\s*\n/);
      expect(content).toMatch(/title:\s*Checkout Slots/);
    });

    test('should import Nimbus Text component', () => {
      expect(content).toContain("import { Text } from '@nimbus-ds/components'");
    });

    test('should import image URLs', () => {
      expect(content).toContain('import uiSlotsDesktopUrl');
      expect(content).toContain('import uiSlotsMobileUrl');
      expect(content).toContain('/img/pt/nube-sdk-ui-slots-checkout-desktop.png');
      expect(content).toContain('/img/pt/nube-sdk-ui-slots-checkout-mobile.png');
    });

    test('should describe checkout slots', () => {
      expect(content).toContain('Checkout slots are containers');
      expect(content).toContain('checkout flow');
    });

    test('should have available slots table', () => {
      expect(content).toContain('## Available Slots');
      expect(content).toContain('| Slot');
      expect(content).toContain('| Page');
    });

    test('should list key checkout slots', () => {
      const keySlots = [
        'before_main_content',
        'after_main_content',
        'after_line_items_price',
        'before_line_items',
        'after_line_items',
        'after_contact_form',
        'after_address_form',
        'after_billing_form',
        'after_payment_options',
        'before_payment_options'
      ];

      keySlots.forEach(slot => {
        expect(content).toContain(slot);
      });
    });

    test('should specify page availability for slots', () => {
      expect(content).toMatch(/start/);
      expect(content).toMatch(/payment/);
    });

    test('should have visual reference section', () => {
      expect(content).toContain('## Visual Reference');
      expect(content).toContain('### Desktop Layout');
      expect(content).toContain('### Mobile Layout');
    });

    test('should include desktop image', () => {
      expect(content).toContain('<img src={uiSlotsDesktopUrl}');
    });

    test('should include mobile image', () => {
      expect(content).toContain('<img src={uiSlotsMobileUrl}');
    });

    test('should have examples section', () => {
      expect(content).toContain('## Examples');
    });

    test('should provide shipping options slot example', () => {
      expect(content).toContain('### Shipping Options Slot');
      expect(content).toContain('after_shipping_description');
      expect(content).toContain('nube.render');
    });

    test('should provide payment options example', () => {
      expect(content).toContain('### Adding Content Before Payment Options');
      expect(content).toContain('before_payment_options');
    });

    test('should provide contact form example', () => {
      expect(content).toContain('### Adding Content After Contact Form');
      expect(content).toContain('after_contact_form');
    });

    test('should have best practices section', () => {
      expect(content).toContain('## Best Practices');
      expect(content).toContain('key');
      expect(content).toContain('nube.clearSlot()');
    });

    test('code examples should use TSX syntax', () => {
      const codeBlocks = content.match(/```tsx[\s\S]*?```/g) || [];
      expect(codeBlocks.length).toBeGreaterThan(0);

      codeBlocks.forEach(block => {
        expect(block).toContain('nube.render');
        expect(block).toMatch(/<\w+/); // JSX opening tag
      });
    });
  });

  describe('Storefront Slots Documentation', () => {
    const storefrontSlotsPath = path.join(docsDir, 'slots/storefront-slots.md');
    let content;

    beforeAll(() => {
      content = fs.readFileSync(storefrontSlotsPath, 'utf-8');
    });

    test('should exist', () => {
      expect(fs.existsSync(storefrontSlotsPath)).toBe(true);
    });

    test('should have frontmatter with title', () => {
      expect(content).toMatch(/^---\s*\n/);
      expect(content).toMatch(/title:\s*Storefront Slots/);
    });

    test('should import Nimbus components', () => {
      expect(content).toContain("import { Alert, Text, Box, Button } from '@nimbus-ds/components'");
    });

    test('should describe storefront slots', () => {
      expect(content).toContain('Storefront slots are containers');
      expect(content).toContain('storefront pages');
    });

    test('should have theme compatibility alert', () => {
      expect(content).toContain('<Alert appearance="warning"');
      expect(content).toContain('Theme Compatibility');
      expect(content).toContain('Patagonia theme');
    });

    test('should have available slots table', () => {
      expect(content).toContain('## Available Slots');
      expect(content).toContain('| Slot');
      expect(content).toContain('| Page');
    });

    test('should list key storefront slots', () => {
      const keySlots = [
        'before_main_content',
        'before_quick_buy_add_to_cart',
        'before_product_grid_item_name',
        'after_product_grid_item_name',
        'product_grid_item_image_top_left',
        'product_grid_item_image_top_right',
        'before_start_checkout_button',
        'before_price_pdp',
        'after_add_to_cart_pdp',
        'cart_line_item_top',
        'before_footer'
      ];

      keySlots.forEach(slot => {
        expect(content).toContain(slot);
      });
    });

    test('should specify pages for storefront slots', () => {
      expect(content).toContain('home');
      expect(content).toContain('product');
      expect(content).toContain('category');
      expect(content).toContain('search');
      expect(content).toContain('cart');
    });

    test('should have slot visual reference section', () => {
      expect(content).toContain('## Slot Visual Reference');
      expect(content).toContain('### Home, Category, and Search Pages');
    });

    test('should include visual reference images', () => {
      expect(content).toContain('![Before Main Content Slot]');
      expect(content).toContain('![Before Start Checkout Button Slot]');
      expect(content).toContain('![Before Footer Slot]');
    });

    test('should document product grid slots', () => {
      expect(content).toContain('## Product Grid Slots');
      expect(content).toContain('product cards');
      expect(content).toContain('product grids');
    });

    test('should explain rendering in product grids', () => {
      expect(content).toContain('### Rendering Components in Product Grids');
      expect(content).toContain('key');
      expect(content).toContain("product's ID");
    });

    test('should have product page slots section', () => {
      expect(content).toContain('## Product Page Slots');
      expect(content).toContain('before_product_detail_name');
      expect(content).toContain('after_product_detail_name');
    });

    test('should have cart page slots section', () => {
      expect(content).toContain('## Cart Page Slots');
      expect(content).toContain('before_line_items');
      expect(content).toContain('cart_line_item_top');
    });

    test('should provide dynamic product grid example', () => {
      expect(content).toContain('### Dynamic Product Grid Rendering');
      expect(content).toContain('product_grid_item_image_top_left');
      expect(content).toContain('allProducts.map');
    });

    test('should have best practices section', () => {
      expect(content).toContain('## Best Practices');
      expect(content).toContain('Patagonia theme');
      expect(content).toContain('nube.clearSlot()');
    });

    test('should show cart line item usage', () => {
      expect(content).toContain('state.cart.items.map');
      expect(content).toContain('item.id');
    });

    test('code examples should be valid TSX', () => {
      const codeBlocks = content.match(/```tsx[\s\S]*?```/g) || [];
      expect(codeBlocks.length).toBeGreaterThan(0);

      codeBlocks.forEach(block => {
        // Should have proper JSX
        expect(block).toMatch(/<\w+[\s\S]*?>/);
        // Should use nube.render
        if (block.includes('export function App')) {
          expect(block).toContain('nube.render');
        }
      });
    });
  });

  describe('Documentation Consistency', () => {
    test('all documentation files should have consistent frontmatter format', () => {
      const docFiles = [
        'getting-started.md',
        'state.md',
        'components/image.md',
        'slots/checkout-slots.md',
        'slots/storefront-slots.md'
      ];

      docFiles.forEach(file => {
        const filePath = path.join(docsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Check frontmatter exists
        expect(content).toMatch(/^---\s*\n/);
        expect(content).toMatch(/title:/);
        expect(content).toMatch(/\n---\s*\n/);
      });
    });

    test('documentation should use consistent import patterns', () => {
      const componentDocs = [
        'components/image.md'
      ];

      componentDocs.forEach(file => {
        const filePath = path.join(docsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Should import from nube-sdk packages
        expect(content).toMatch(/@tiendanube\/nube-sdk-(types|jsx)/);
      });
    });

    test('code examples should use consistent formatting', () => {
      const docsWithExamples = [
        'getting-started.md',
        'state.md',
        'components/image.md',
        'slots/checkout-slots.md',
        'slots/storefront-slots.md'
      ];

      docsWithExamples.forEach(file => {
        const filePath = path.join(docsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Code blocks should be properly closed
        const codeBlockCount = (content.match(/```/g) || []).length;
        expect(codeBlockCount % 2).toBe(0);
      });
    });
  });

  describe('Edge Cases', () => {
    test('should handle missing files gracefully', () => {
      const nonExistentPath = path.join(docsDir, 'non-existent-file.md');
      expect(fs.existsSync(nonExistentPath)).toBe(false);
    });

    test('documentation files should not be empty', () => {
      const docFiles = [
        'getting-started.md',
        'state.md',
        'components/image.md',
        'slots/checkout-slots.md',
        'slots/storefront-slots.md'
      ];

      docFiles.forEach(file => {
        const filePath = path.join(docsDir, file);
        const stats = fs.statSync(filePath);
        expect(stats.size).toBeGreaterThan(100);
      });
    });

    test('should not contain TODO or FIXME comments', () => {
      const docFiles = [
        'getting-started.md',
        'state.md',
        'components/image.md',
        'slots/checkout-slots.md',
        'slots/storefront-slots.md'
      ];

      docFiles.forEach(file => {
        const filePath = path.join(docsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        expect(content).not.toMatch(/TODO/i);
        expect(content).not.toMatch(/FIXME/i);
      });
    });
  });
});