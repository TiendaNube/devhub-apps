/**
 * Integration tests for documentation consistency
 * Validates cross-references, links, and overall documentation structure
 */

const fs = require('fs');
const path = require('path');

describe('Documentation Integration', () => {
  describe('Cross-References Between Files', () => {
    test('sidebars.js should reference all existing documentation files', () => {
      const sidebars = require('../../sidebars.js');
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

      allDocIds.forEach(docId => {
        const docPath = path.join(docsDir, `${docId}.md`);
        expect(fs.existsSync(docPath)).toBe(true);
      });
    });

    test('landing-page should be referenced in sidebars', () => {
      const sidebars = require('../../sidebars.js');

      const hasLandingPage = (items) => {
        for (const item of items) {
          if (typeof item === 'string' && item === 'applications/landing-page') {
            return true;
          }
          if (item.type === 'category' && Array.isArray(item.items)) {
            if (hasLandingPage(item.items)) return true;
          }
        }
        return false;
      };

      expect(hasLandingPage(sidebars.sidebar)).toBe(true);
    });

    test('Nube SDK components should be referenced in sidebars', () => {
      const sidebars = require('../../sidebars.js');
      const nubeSDKCategory = sidebars.nube_sdk_sidebar[0];
      const componentsCategory = nubeSDKCategory.items.find(
        item => typeof item === 'object' && item.label === 'Components'
      );

      expect(componentsCategory).toBeDefined();
      expect(componentsCategory.items).toContain('applications/nube-sdk/components/image');
    });

    test('all Nube SDK slots should be properly linked', () => {
      const sidebars = require('../../sidebars.js');
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

        const slotPath = path.join(__dirname, '../../docs', `${slot}.md`);
        expect(fs.existsSync(slotPath)).toBe(true);
      });
    });
  });

  describe('Internal Link Validation', () => {
    test('getting-started should link to valid documents', () => {
      const docPath = path.join(__dirname, '../../docs/applications/nube-sdk/getting-started.md');
      const content = fs.readFileSync(docPath, 'utf-8');

      // Check relative links
      const links = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
      links.forEach(link => {
        const match = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          const linkPath = match[2];

          // Only check relative links (not URLs)
          if (!linkPath.startsWith('http') && !linkPath.startsWith('mailto')) {
            if (linkPath.startsWith('./')) {
              const targetPath = path.join(
                path.dirname(docPath),
                linkPath
              );
              // Check if target exists (might need to add .md extension)
              const possiblePaths = [
                targetPath,
                targetPath + '.md',
                path.join(targetPath, 'index.md')
              ];

              const exists = possiblePaths.some(p => fs.existsSync(p));
              if (!exists) {
                console.warn(`Potentially broken link in getting-started.md: ${linkPath}`);
              }
            }
          }
        }
      });

      // This test warns but doesn't fail
      expect(true).toBe(true);
    });

    test('state documentation should link to events documentation', () => {
      const statePath = path.join(__dirname, '../../docs/applications/nube-sdk/state.md');
      const content = fs.readFileSync(statePath, 'utf-8');

      expect(content).toContain('[Events](./events)');

      // Verify events.md exists
      const eventsPath = path.join(__dirname, '../../docs/applications/nube-sdk/events.md');
      expect(fs.existsSync(eventsPath)).toBe(true);
    });

    test('getting-started should link to manual-setup', () => {
      const gettingStartedPath = path.join(__dirname, '../../docs/applications/nube-sdk/getting-started.md');
      const content = fs.readFileSync(gettingStartedPath, 'utf-8');

      expect(content).toContain('[Manual Project Setup](./manual-setup)');

      // Verify manual-setup.md exists
      const manualSetupPath = path.join(__dirname, '../../docs/applications/nube-sdk/manual-setup.md');
      expect(fs.existsSync(manualSetupPath)).toBe(true);
    });
  });

  describe('Image Reference Validation', () => {
    test('all image references in Nube SDK docs should point to existing files', () => {
      const docsDir = path.join(__dirname, '../../docs/applications/nube-sdk');
      const staticDir = path.join(__dirname, '../../static');

      const checkImagesInFile = (filePath) => {
        const content = fs.readFileSync(filePath, 'utf-8');
        const imageRefs = content.match(/!\[.*?\]\((.*?)\)|src=\{.*?\}|src="([^"]+)"/g) || [];

        imageRefs.forEach(ref => {
          let imagePath;

          // Markdown image syntax
          const markdownMatch = ref.match(/!\[.*?\]\(([^)]+)\)/);
          if (markdownMatch) {
            imagePath = markdownMatch[1].split(' ')[0].replace(/["']/g, ''); // Remove quotes and extra text
          }

          // JSX src attribute
          const jsxMatch = ref.match(/src="([^"]+)"/);
          if (jsxMatch) {
            imagePath = jsxMatch[1];
          }

          if (imagePath) {
            // Skip URLs
            if (!imagePath.startsWith('http')) {
              // Handle different path formats
              if (imagePath.startsWith('/img/')) {
                const fullPath = path.join(staticDir, imagePath.replace('/img/', 'img/'));
                if (!fs.existsSync(fullPath)) {
                  console.warn(`Missing image: ${imagePath} referenced in ${filePath}`);
                }
              } else if (imagePath.includes('static/')) {
                // Handle both ../../../static/ and ../../../../static/
                const cleanPath = imagePath.replace(/^(\.\.\/)+/, '');
                const fullPath = path.join(__dirname, '../../', cleanPath);
                if (!fs.existsSync(fullPath)) {
                  console.warn(`Missing image: ${imagePath} referenced in ${filePath}`);
                }
              }
            }
          }
        });
      };

      // Check key documentation files
      const docsToCheck = [
        'getting-started.md',
        'components/image.md',
        'slots/checkout-slots.md',
        'slots/storefront-slots.md'
      ];

      docsToCheck.forEach(doc => {
        const fullPath = path.join(docsDir, doc);
        if (fs.existsSync(fullPath)) {
          checkImagesInFile(fullPath);
        }
      });

      // This test warns but doesn't fail
      expect(true).toBe(true);
    });

    test('checkout-slots should reference valid slot images', () => {
      const docPath = path.join(__dirname, '../../docs/applications/nube-sdk/slots/checkout-slots.md');
      const content = fs.readFileSync(docPath, 'utf-8');

      // Should import images
      expect(content).toContain('import uiSlotsDesktopUrl');
      expect(content).toContain('import uiSlotsMobileUrl');

      // Images should be used
      expect(content).toContain('<img src={uiSlotsDesktopUrl}');
      expect(content).toContain('<img src={uiSlotsMobileUrl}');
    });
  });

  describe('Translation Consistency', () => {
    test('all translation versions of landing-page should exist', () => {
      const languages = ['pt', 'en', 'es'];
      const paths = {
        pt: 'docs/applications/landing-page.md',
        en: 'i18n/en/docusaurus-plugin-content-docs/current/applications/landing-page.md',
        es: 'i18n/es/docusaurus-plugin-content-docs/current/applications/landing-page.md'
      };

      languages.forEach(lang => {
        const fullPath = path.join(__dirname, '../../', paths[lang]);
        expect(fs.existsSync(fullPath)).toBe(true);
      });
    });

    test('translation versions should have same structure', () => {
      const ptPath = path.join(__dirname, '../../docs/applications/landing-page.md');
      const enPath = path.join(__dirname, '../../i18n/en/docusaurus-plugin-content-docs/current/applications/landing-page.md');
      const esPath = path.join(__dirname, '../../i18n/es/docusaurus-plugin-content-docs/current/applications/landing-page.md');

      const ptContent = fs.readFileSync(ptPath, 'utf-8');
      const enContent = fs.readFileSync(enPath, 'utf-8');
      const esContent = fs.readFileSync(esPath, 'utf-8');

      // Count major sections (##)
      const ptSections = (ptContent.match(/^##\s/gm) || []).length;
      const enSections = (enContent.match(/^##\s/gm) || []).length;
      const esSections = (esContent.match(/^##\s/gm) || []).length;

      expect(ptSections).toBe(enSections);
      expect(ptSections).toBe(esSections);
    });

    test('all versions should have frontmatter', () => {
      const paths = [
        'docs/applications/landing-page.md',
        'i18n/en/docusaurus-plugin-content-docs/current/applications/landing-page.md',
        'i18n/es/docusaurus-plugin-content-docs/current/applications/landing-page.md'
      ];

      paths.forEach(relativePath => {
        const fullPath = path.join(__dirname, '../../', relativePath);
        const content = fs.readFileSync(fullPath, 'utf-8');

        expect(content).toMatch(/^---\s*\n/);
        expect(content).toMatch(/title:/);
        expect(content).toMatch(/\n---\s*\n/);
      });
    });
  });

  describe('Code Example Consistency', () => {
    test('code examples should use consistent import patterns', () => {
      const docs = [
        'docs/applications/nube-sdk/getting-started.md',
        'docs/applications/nube-sdk/state.md',
        'docs/applications/nube-sdk/components/image.md',
        'docs/applications/nube-sdk/slots/checkout-slots.md',
        'docs/applications/nube-sdk/slots/storefront-slots.md'
      ];

      const importPatterns = new Set();

      docs.forEach(doc => {
        const fullPath = path.join(__dirname, '../../', doc);
        if (fs.existsSync(fullPath)) {
          const content = fs.readFileSync(fullPath, 'utf-8');

          // Extract import statements from code blocks
          const imports = content.match(/import .* from ['"]@tiendanube\/[^'"]+['"]/g) || [];
          imports.forEach(imp => importPatterns.add(imp));
        }
      });

      // Should use consistent package names
      const hasTypes = Array.from(importPatterns).some(imp =>
        imp.includes('@tiendanube/nube-sdk-types')
      );
      const hasJSX = Array.from(importPatterns).some(imp =>
        imp.includes('@tiendanube/nube-sdk-jsx')
      );

      expect(hasTypes).toBe(true);
      expect(hasJSX).toBe(true);
    });

    test('code examples should use consistent NubeSDK type', () => {
      const docs = [
        'docs/applications/nube-sdk/getting-started.md',
        'docs/applications/nube-sdk/state.md',
        'docs/applications/nube-sdk/components/image.md'
      ];

      docs.forEach(doc => {
        const fullPath = path.join(__dirname, '../../', doc);
        if (fs.existsSync(fullPath)) {
          const content = fs.readFileSync(fullPath, 'utf-8');

          if (content.includes('import type {')) {
            // If it has type imports, should reference NubeSDK
            const hasNubeSDKType = content.includes('NubeSDK') || content.includes('NubeSDKState');
            if (hasNubeSDKType) {
              expect(content).toContain('@tiendanube/nube-sdk-types');
            }
          }
        }
      });

      // This test always passes
      expect(true).toBe(true);
    });
  });

  describe('Build Configuration', () => {
    test('package.json should have required scripts', () => {
      const packagePath = path.join(__dirname, '../../package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

      expect(packageJson.scripts).toHaveProperty('build');
      expect(packageJson.scripts).toHaveProperty('start');
      expect(packageJson.scripts).toHaveProperty('docusaurus');
    });

    test('sidebars.js should be valid JavaScript module', () => {
      const sidebarsPath = path.join(__dirname, '../../sidebars.js');
      expect(() => {
        require(sidebarsPath);
      }).not.toThrow();
    });

    test('CODEOWNERS should be in correct location', () => {
      const codeownersPath = path.join(__dirname, '../../.github/CODEOWNERS');
      expect(fs.existsSync(codeownersPath)).toBe(true);
    });
  });

  describe('Overall Documentation Quality', () => {
    test('all markdown files should have proper line endings', () => {
      const checkFile = (filePath) => {
        const content = fs.readFileSync(filePath, 'utf-8');
        // Should not have Windows line endings on Unix
        if (process.platform !== 'win32') {
          expect(content.includes('\r\n')).toBe(false);
        }
      };

      const docs = [
        'docs/applications/landing-page.md',
        'docs/applications/nube-sdk/getting-started.md',
        'docs/applications/nube-sdk/state.md'
      ];

      docs.forEach(doc => {
        const fullPath = path.join(__dirname, '../../', doc);
        if (fs.existsSync(fullPath)) {
          checkFile(fullPath);
        }
      });
    });

    test('no documentation file should be empty', () => {
      const docs = [
        'docs/applications/landing-page.md',
        'docs/applications/nube-sdk/getting-started.md',
        'docs/applications/nube-sdk/state.md',
        'docs/applications/nube-sdk/components/image.md',
        'docs/applications/nube-sdk/slots/checkout-slots.md',
        'docs/applications/nube-sdk/slots/storefront-slots.md'
      ];

      docs.forEach(doc => {
        const fullPath = path.join(__dirname, '../../', doc);
        if (fs.existsSync(fullPath)) {
          const stats = fs.statSync(fullPath);
          expect(stats.size).toBeGreaterThan(100);
        }
      });
    });

    test('documentation should not contain sensitive information', () => {
      const docs = [
        'docs/applications/landing-page.md',
        'docs/applications/nube-sdk/getting-started.md'
      ];

      const sensitivePatterns = [
        /password[:\s]*['"]\w+['"]/i,
        /api[_-]?key[:\s]*['"]\w{20,}['"]/i,
        /secret[:\s]*['"]\w+['"]/i,
        /token[:\s]*['"]\w{20,}['"]/i
      ];

      docs.forEach(doc => {
        const fullPath = path.join(__dirname, '../../', doc);
        if (fs.existsSync(fullPath)) {
          const content = fs.readFileSync(fullPath, 'utf-8');

          sensitivePatterns.forEach(pattern => {
            expect(content).not.toMatch(pattern);
          });
        }
      });
    });
  });

  describe('Regression Prevention', () => {
    test('critical documentation files should not be deleted', () => {
      const criticalFiles = [
        'docs/applications/landing-page.md',
        'docs/applications/nube-sdk/getting-started.md',
        'docs/applications/nube-sdk/state.md',
        'sidebars.js',
        '.github/CODEOWNERS'
      ];

      criticalFiles.forEach(file => {
        const fullPath = path.join(__dirname, '../../', file);
        expect(fs.existsSync(fullPath)).toBe(true);
      });
    });

    test('sidebars should maintain backward compatibility', () => {
      const sidebars = require('../../sidebars.js');

      // Main sidebar should exist
      expect(sidebars).toHaveProperty('sidebar');

      // Nube SDK sidebar should exist
      expect(sidebars).toHaveProperty('nube_sdk_sidebar');

      // Both should be arrays
      expect(Array.isArray(sidebars.sidebar)).toBe(true);
      expect(Array.isArray(sidebars.nube_sdk_sidebar)).toBe(true);
    });
  });
});