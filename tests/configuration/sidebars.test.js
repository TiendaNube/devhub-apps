/**
 * Tests for sidebars.js configuration
 * Validates sidebar structure, links, and references
 */

const path = require('path');
const fs = require('fs');

describe('Sidebars Configuration', () => {
  let sidebars;
  const sidebarsPath = path.join(__dirname, '../../sidebars.js');

  beforeAll(() => {
    // Load the sidebars module
    sidebars = require(sidebarsPath);
  });

  describe('File Structure', () => {
    test('should exist', () => {
      expect(fs.existsSync(sidebarsPath)).toBe(true);
    });

    test('should be valid JavaScript', () => {
      expect(() => {
        require(sidebarsPath);
      }).not.toThrow();
    });

    test('should export an object', () => {
      expect(typeof sidebars).toBe('object');
      expect(sidebars).not.toBeNull();
    });
  });

  describe('Main Sidebar Configuration', () => {
    test('should have main sidebar defined', () => {
      expect(sidebars).toHaveProperty('sidebar');
      expect(Array.isArray(sidebars.sidebar)).toBe(true);
    });

    test('should have getting-started as first item', () => {
      const firstItem = sidebars.sidebar[0];
      expect(firstItem).toHaveProperty('type', 'doc');
      expect(firstItem).toHaveProperty('id', 'getting-started');
      expect(firstItem).toHaveProperty('label');
    });

    test('should have all main categories', () => {
      const categories = sidebars.sidebar
        .filter(item => item.type === 'category')
        .map(item => item.label);

      const expectedCategories = [
        'Ferramentas',
        'Aplicativos',
        'Diretrizes de design',
        'Homologação'
      ];

      expectedCategories.forEach(category => {
        expect(categories).toContain(category);
      });
    });

    test('should have applications category with landing-page', () => {
      const applicationsCategory = sidebars.sidebar.find(
        item => item.type === 'category' && item.label === 'Aplicativos'
      );

      expect(applicationsCategory).toBeDefined();
      expect(applicationsCategory.items).toContain('applications/landing-page');
    });

    test('should have Nube SDK subcategory in applications', () => {
      const applicationsCategory = sidebars.sidebar.find(
        item => item.type === 'category' && item.label === 'Aplicativos'
      );

      const nubeSDKCategory = applicationsCategory.items.find(
        item => typeof item === 'object' && item.label === 'Nube SDK'
      );

      expect(nubeSDKCategory).toBeDefined();
      expect(nubeSDKCategory.type).toBe('category');
      expect(Array.isArray(nubeSDKCategory.items)).toBe(true);
    });
  });

  describe('Nube SDK Sidebar Configuration', () => {
    test('should have nube_sdk_sidebar defined', () => {
      expect(sidebars).toHaveProperty('nube_sdk_sidebar');
      expect(Array.isArray(sidebars.nube_sdk_sidebar)).toBe(true);
    });

    test('should have Nube SDK category as root', () => {
      const rootCategory = sidebars.nube_sdk_sidebar[0];
      expect(rootCategory).toHaveProperty('type', 'category');
      expect(rootCategory).toHaveProperty('label', 'Nube SDK');
    });

    test('should include core SDK documentation', () => {
      const nubeSDKCategory = sidebars.nube_sdk_sidebar[0];
      const coreItems = [
        'applications/nube-sdk/overview',
        'applications/nube-sdk/getting-started',
        'applications/nube-sdk/devtools',
        'applications/nube-sdk/script-structure',
        'applications/nube-sdk/styling',
        'applications/nube-sdk/state',
        'applications/nube-sdk/events',
        'applications/nube-sdk/browser-apis'
      ];

      coreItems.forEach(item => {
        expect(nubeSDKCategory.items).toContain(item);
      });
    });

    test('should have Components subcategory', () => {
      const nubeSDKCategory = sidebars.nube_sdk_sidebar[0];
      const componentsCategory = nubeSDKCategory.items.find(
        item => typeof item === 'object' && item.label === 'Components'
      );

      expect(componentsCategory).toBeDefined();
      expect(componentsCategory.type).toBe('category');
      expect(Array.isArray(componentsCategory.items)).toBe(true);
      expect(componentsCategory.items.length).toBeGreaterThan(0);
    });

    test('should include Image component in Components category', () => {
      const nubeSDKCategory = sidebars.nube_sdk_sidebar[0];
      const componentsCategory = nubeSDKCategory.items.find(
        item => typeof item === 'object' && item.label === 'Components'
      );

      expect(componentsCategory.items).toContain('applications/nube-sdk/components/image');
    });

    test('should have UI Slots subcategory', () => {
      const nubeSDKCategory = sidebars.nube_sdk_sidebar[0];
      const slotsCategory = nubeSDKCategory.items.find(
        item => typeof item === 'object' && item.label === 'UI Slots'
      );

      expect(slotsCategory).toBeDefined();
      expect(slotsCategory.type).toBe('category');
      expect(Array.isArray(slotsCategory.items)).toBe(true);
    });

    test('should include slot documentation in UI Slots category', () => {
      const nubeSDKCategory = sidebars.nube_sdk_sidebar[0];
      const slotsCategory = nubeSDKCategory.items.find(
        item => typeof item === 'object' && item.label === 'UI Slots'
      );

      const expectedSlots = [
        'applications/nube-sdk/slots/overview',
        'applications/nube-sdk/slots/checkout-slots',
        'applications/nube-sdk/slots/storefront-slots'
      ];

      expectedSlots.forEach(slot => {
        expect(slotsCategory.items).toContain(slot);
      });
    });
  });

  describe('Document References Validation', () => {
    test('all document references should have valid paths', () => {
      const docsDir = path.join(__dirname, '../../docs');

      const collectDocIds = (items) => {
        const docIds = [];
        items.forEach(item => {
          if (typeof item === 'string') {
            docIds.push(item);
          } else if (item.type === 'doc') {
            docIds.push(item.id);
          } else if (item.type === 'category' && Array.isArray(item.items)) {
            docIds.push(...collectDocIds(item.items));
          }
        });
        return docIds;
      };

      const allDocIds = collectDocIds(sidebars.sidebar);

      // Check that referenced documents exist
      allDocIds.forEach(docId => {
        const docPath = path.join(docsDir, `${docId}.md`);
        expect(fs.existsSync(docPath)).toBe(true);
      });
    });

    test('landing-page document should exist', () => {
      const docsDir = path.join(__dirname, '../../docs');
      const landingPagePath = path.join(docsDir, 'applications/landing-page.md');
      expect(fs.existsSync(landingPagePath)).toBe(true);
    });

    test('all Nube SDK component documents should exist', () => {
      const docsDir = path.join(__dirname, '../../docs');
      const nubeSDKCategory = sidebars.nube_sdk_sidebar[0];
      const componentsCategory = nubeSDKCategory.items.find(
        item => typeof item === 'object' && item.label === 'Components'
      );

      componentsCategory.items.forEach(componentId => {
        const componentPath = path.join(docsDir, `${componentId}.md`);
        expect(fs.existsSync(componentPath)).toBe(true);
      });
    });

    test('all slot documents should exist', () => {
      const docsDir = path.join(__dirname, '../../docs');
      const nubeSDKCategory = sidebars.nube_sdk_sidebar[0];
      const slotsCategory = nubeSDKCategory.items.find(
        item => typeof item === 'object' && item.label === 'UI Slots'
      );

      slotsCategory.items.forEach(slotId => {
        const slotPath = path.join(docsDir, `${slotId}.md`);
        expect(fs.existsSync(slotPath)).toBe(true);
      });
    });
  });

  describe('Sidebar Structure Validation', () => {
    test('should not have duplicate document IDs in main sidebar', () => {
      const collectDocIds = (items, ids = new Set()) => {
        items.forEach(item => {
          if (typeof item === 'string') {
            expect(ids.has(item)).toBe(false);
            ids.add(item);
          } else if (item.type === 'doc') {
            expect(ids.has(item.id)).toBe(false);
            ids.add(item.id);
          } else if (item.type === 'category' && Array.isArray(item.items)) {
            collectDocIds(item.items, ids);
          }
        });
        return ids;
      };

      const uniqueIds = collectDocIds(sidebars.sidebar);
      expect(uniqueIds.size).toBeGreaterThan(0);
    });

    test('categories should have non-empty items arrays', () => {
      const validateCategories = (items) => {
        items.forEach(item => {
          if (item.type === 'category') {
            expect(Array.isArray(item.items)).toBe(true);
            expect(item.items.length).toBeGreaterThan(0);
            expect(item.label).toBeTruthy();
            validateCategories(item.items);
          }
        });
      };

      validateCategories(sidebars.sidebar);
      validateCategories(sidebars.nube_sdk_sidebar);
    });

    test('should have proper nesting depth', () => {
      const getMaxDepth = (items, currentDepth = 1) => {
        let maxDepth = currentDepth;
        items.forEach(item => {
          if (item.type === 'category' && Array.isArray(item.items)) {
            const depth = getMaxDepth(item.items, currentDepth + 1);
            maxDepth = Math.max(maxDepth, depth);
          }
        });
        return maxDepth;
      };

      const mainDepth = getMaxDepth(sidebars.sidebar);
      const nubeSDKDepth = getMaxDepth(sidebars.nube_sdk_sidebar);

      // Reasonable nesting depth (shouldn't be too deep)
      expect(mainDepth).toBeLessThanOrEqual(4);
      expect(nubeSDKDepth).toBeLessThanOrEqual(3);
    });
  });

  describe('Consistency Between Sidebars', () => {
    test('Nube SDK items should appear in both sidebars', () => {
      // Find Nube SDK category in main sidebar
      const applicationsCategory = sidebars.sidebar.find(
        item => item.type === 'category' && item.label === 'Aplicativos'
      );
      const mainNubeSDK = applicationsCategory.items.find(
        item => typeof item === 'object' && item.label === 'Nube SDK'
      );

      // Nube SDK standalone sidebar
      const standaloneNubeSDK = sidebars.nube_sdk_sidebar[0];

      // Both should have same core items
      expect(mainNubeSDK.items).toContain('applications/nube-sdk/overview');
      expect(standaloneNubeSDK.items).toContain('applications/nube-sdk/overview');
      expect(mainNubeSDK.items).toContain('applications/nube-sdk/getting-started');
      expect(standaloneNubeSDK.items).toContain('applications/nube-sdk/getting-started');
    });
  });

  describe('Edge Cases and Error Handling', () => {
    test('should handle empty categories gracefully', () => {
      // Verify no category has empty items
      const checkNonEmpty = (items) => {
        items.forEach(item => {
          if (item.type === 'category') {
            expect(item.items.length).toBeGreaterThan(0);
            checkNonEmpty(item.items);
          }
        });
      };

      expect(() => checkNonEmpty(sidebars.sidebar)).not.toThrow();
    });

    test('should not have circular references', () => {
      const seen = new Set();

      const checkCircular = (items) => {
        items.forEach(item => {
          const key = JSON.stringify(item);
          expect(seen.has(key)).toBe(false);
          seen.add(key);

          if (item.type === 'category' && Array.isArray(item.items)) {
            checkCircular(item.items);
          }
        });
      };

      expect(() => checkCircular(sidebars.sidebar)).not.toThrow();
    });

    test('should have valid item types', () => {
      const validTypes = ['doc', 'category'];

      const validateTypes = (items) => {
        items.forEach(item => {
          if (typeof item === 'object') {
            expect(validTypes).toContain(item.type);
            if (item.type === 'category') {
              validateTypes(item.items);
            }
          }
        });
      };

      validateTypes(sidebars.sidebar);
      validateTypes(sidebars.nube_sdk_sidebar);
    });
  });
});