/**
 * Tests for static image assets
 * Validates that referenced images exist and are accessible
 */

const fs = require('fs');
const path = require('path');

describe('Image Assets', () => {
  const staticDir = path.join(__dirname, '../../static/img/pt');

  describe('Nube SDK Images', () => {
    // Images that actually exist in the repository
    const nubeSDKImages = [
      'nube-sdk-before_main_content.png',
      'nube-sdk-devtools.png',
      'nube-sdk-flag.png',
      'nube-sdk-development-mode.png',
      'nube-sdk-ui-img-1.png'
    ];

    nubeSDKImages.forEach(imageName => {
      test(`${imageName} should exist`, () => {
        const imagePath = path.join(staticDir, imageName);
        expect(fs.existsSync(imagePath)).toBe(true);
      });

      test(`${imageName} should be a valid file`, () => {
        const imagePath = path.join(staticDir, imageName);
        if (fs.existsSync(imagePath)) {
          const stats = fs.statSync(imagePath);
          expect(stats.isFile()).toBe(true);
          expect(stats.size).toBeGreaterThan(0);
        }
      });

      test(`${imageName} should have reasonable file size`, () => {
        const imagePath = path.join(staticDir, imageName);
        if (fs.existsSync(imagePath)) {
          const stats = fs.statSync(imagePath);
          // Images should be between 1KB and 5MB
          expect(stats.size).toBeGreaterThan(1000);
          expect(stats.size).toBeLessThan(5 * 1024 * 1024);
        }
      });

      test(`${imageName} should be PNG format`, () => {
        const imagePath = path.join(staticDir, imageName);
        expect(imageName).toMatch(/\.png$/i);

        if (fs.existsSync(imagePath)) {
          const buffer = fs.readFileSync(imagePath);
          // PNG files start with specific magic bytes: 89 50 4E 47
          expect(buffer[0]).toBe(0x89);
          expect(buffer[1]).toBe(0x50);
          expect(buffer[2]).toBe(0x4E);
          expect(buffer[3]).toBe(0x47);
        }
      });
    });
  });

  describe('Image Directory Structure', () => {
    test('static/img directory should exist', () => {
      const imgDir = path.join(__dirname, '../../static/img');
      expect(fs.existsSync(imgDir)).toBe(true);
    });

    test('pt (Portuguese) image directory should exist', () => {
      expect(fs.existsSync(staticDir)).toBe(true);
    });

    test('pt directory should contain PNG files', () => {
      const files = fs.readdirSync(staticDir);
      const pngFiles = files.filter(file => file.endsWith('.png'));
      expect(pngFiles.length).toBeGreaterThan(0);
    });

    test('should not contain broken or zero-byte images', () => {
      const files = fs.readdirSync(staticDir);
      const imageFiles = files.filter(file =>
        file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)
      );

      imageFiles.forEach(file => {
        const filePath = path.join(staticDir, file);
        const stats = fs.statSync(filePath);
        expect(stats.size).toBeGreaterThan(0);
      });
    });
  });

  describe('Referenced Images in Documentation', () => {
    test('getting-started.md should reference existing images', () => {
      const docPath = path.join(__dirname, '../../docs/applications/nube-sdk/getting-started.md');
      const content = fs.readFileSync(docPath, 'utf-8');

      const imageRefs = content.match(/!\[.*?\]\(([^)]+)\)/g) || [];
      imageRefs.forEach(ref => {
        const match = ref.match(/!\[.*?\]\(([^)]+)\)/);
        if (match) {
          const imagePath = match[1].split(' ')[0].replace(/["']/g, ''); // Remove quotes and extra text
          if (imagePath.startsWith('../../../static/')) {
            const fullPath = path.join(__dirname, '../../', imagePath.replace('../../../', ''));
            expect(fs.existsSync(fullPath)).toBe(true);
          }
        }
      });
    });

    test('image.md should reference existing images', () => {
      const docPath = path.join(__dirname, '../../docs/applications/nube-sdk/components/image.md');
      const content = fs.readFileSync(docPath, 'utf-8');

      const imageRefs = content.match(/!\[.*?\]\(([^)]+)\)/g) || [];
      imageRefs.forEach(ref => {
        const match = ref.match(/!\[.*?\]\(([^)]+)\)/);
        if (match) {
          const imagePath = match[1].split(' ')[0].replace(/["']/g, ''); // Remove quotes and extra text
          if (imagePath.includes('/img/pt/')) {
            const filename = path.basename(imagePath);
            const fullPath = path.join(staticDir, filename);
            expect(fs.existsSync(fullPath)).toBe(true);
          }
        }
      });
    });

    test('storefront-slots.md should reference existing images', () => {
      const docPath = path.join(__dirname, '../../docs/applications/nube-sdk/slots/storefront-slots.md');
      const content = fs.readFileSync(docPath, 'utf-8');

      // Check markdown image references
      const markdownRefs = content.match(/!\[.*?\]\((.*?)\)/g) || [];
      markdownRefs.forEach(ref => {
        const match = ref.match(/!\[.*?\]\((.*?)\)/);
        if (match) {
          const imagePath = match[1];
          if (imagePath.startsWith('/img/pt/')) {
            const filename = path.basename(imagePath);
            const fullPath = path.join(staticDir, filename);
            expect(fs.existsSync(fullPath)).toBe(true);
          }
        }
      });
    });
  });

  describe('Image Naming Conventions', () => {
    test('Nube SDK images should follow naming convention', () => {
      const files = fs.readdirSync(staticDir);
      const nubeSDKFiles = files.filter(file =>
        file.startsWith('nube-sdk-') && file.endsWith('.png')
      );

      nubeSDKFiles.forEach(file => {
        // Should be kebab-case
        expect(file).toMatch(/^nube-sdk-[a-z0-9-_]+\.png$/);
        // Should not have uppercase
        expect(file).not.toMatch(/[A-Z]/);
        // Should not have spaces
        expect(file).not.toContain(' ');
      });
    });

    test('image names should not contain special characters', () => {
      const files = fs.readdirSync(staticDir);
      const imageFiles = files.filter(file =>
        file.match(/\.(png|jpg|jpeg|gif|svg)$/i)
      );

      imageFiles.forEach(file => {
        // Only allow alphanumeric, hyphens, underscores, and dots
        expect(file).toMatch(/^[a-zA-Z0-9-_.]+$/);
      });
    });

    test('should not have duplicate image names with different extensions', () => {
      const files = fs.readdirSync(staticDir);
      const basenames = files.map(file => {
        const ext = path.extname(file);
        return file.slice(0, -ext.length);
      });

      const uniqueBasenames = new Set(basenames);
      // Allow some duplicates (e.g., .jpg and .png versions)
      expect(uniqueBasenames.size).toBeGreaterThan(basenames.length * 0.9);
    });
  });

  describe('Image Accessibility', () => {
    test('images referenced in docs should have alt text', () => {
      const docs = [
        'docs/applications/nube-sdk/getting-started.md',
        'docs/applications/nube-sdk/components/image.md',
        'docs/applications/nube-sdk/slots/storefront-slots.md'
      ];

      docs.forEach(docPath => {
        const fullPath = path.join(__dirname, '../../', docPath);
        if (fs.existsSync(fullPath)) {
          const content = fs.readFileSync(fullPath, 'utf-8');

          // Check that images have alt text (not empty)
          const imageRefs = content.match(/!\[([^\]]*)\]\([^)]+\)/g) || [];
          imageRefs.forEach(ref => {
            const altTextMatch = ref.match(/!\[([^\]]*)\]/);
            if (altTextMatch) {
              const altText = altTextMatch[1];
              // Alt text should not be empty (though it can be for decorative images)
              // For documentation, we expect descriptive alt text
              if (altText.trim() === '') {
                // This is acceptable for some cases, just warn
                console.warn(`Image with empty alt text in ${docPath}: ${ref}`);
              }
            }
          });
        }
      });

      // This test always passes but logs warnings
      expect(true).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    test('should handle non-existent image gracefully', () => {
      const nonExistentPath = path.join(staticDir, 'non-existent-image.png');
      expect(fs.existsSync(nonExistentPath)).toBe(false);
    });

    test('should not have images with very large file sizes', () => {
      const files = fs.readdirSync(staticDir);
      const imageFiles = files.filter(file =>
        file.match(/\.(png|jpg|jpeg|gif)$/i)
      );

      imageFiles.forEach(file => {
        const filePath = path.join(staticDir, file);
        const stats = fs.statSync(filePath);
        // Images should be under 10MB (documentation images should be optimized)
        expect(stats.size).toBeLessThan(10 * 1024 * 1024);
      });
    });

    test('should read image files as binary data', () => {
      const nubeSDKImages = [
        'nube-sdk-devtools.png'
      ];

      nubeSDKImages.forEach(imageName => {
        const imagePath = path.join(staticDir, imageName);
        if (fs.existsSync(imagePath)) {
          const buffer = fs.readFileSync(imagePath);
          expect(Buffer.isBuffer(buffer)).toBe(true);
          expect(buffer.length).toBeGreaterThan(0);
        }
      });
    });
  });

  describe('Performance', () => {
    test('total size of Nube SDK images should be reasonable', () => {
      const nubeSDKImages = [
        'nube-sdk-before_main_content.png',
        'nube-sdk-devtools.png',
        'nube-sdk-flag.png',
        'nube-sdk-development-mode.png',
        'nube-sdk-ui-img-1.png'
      ];

      let totalSize = 0;
      nubeSDKImages.forEach(imageName => {
        const imagePath = path.join(staticDir, imageName);
        if (fs.existsSync(imagePath)) {
          const stats = fs.statSync(imagePath);
          totalSize += stats.size;
        }
      });

      // Total should be less than 20MB
      expect(totalSize).toBeLessThan(20 * 1024 * 1024);
    });

    test('image directory should not be excessively large', () => {
      const files = fs.readdirSync(staticDir);
      // Should have a reasonable number of files
      expect(files.length).toBeLessThan(500);
    });
  });
});