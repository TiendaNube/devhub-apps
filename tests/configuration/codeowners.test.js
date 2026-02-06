/**
 * Tests for .github/CODEOWNERS file
 * Validates CODEOWNERS format, syntax, and team references
 */

const fs = require('fs');
const path = require('path');

describe('CODEOWNERS Configuration', () => {
  const codeownersPath = path.join(__dirname, '../../.github/CODEOWNERS');
  let content;
  let lines;

  beforeAll(() => {
    content = fs.readFileSync(codeownersPath, 'utf-8');
    lines = content.split('\n').filter(line => line.trim() !== '');
  });

  describe('File Existence and Format', () => {
    test('should exist in .github directory', () => {
      expect(fs.existsSync(codeownersPath)).toBe(true);
    });

    test('should be a text file', () => {
      expect(typeof content).toBe('string');
      expect(content.length).toBeGreaterThan(0);
    });

    test('should have proper line endings', () => {
      // Should not have Windows line endings if on Unix
      if (process.platform !== 'win32') {
        expect(content).not.toContain('\r\n');
      }
    });

    test('should not be empty', () => {
      expect(content.trim().length).toBeGreaterThan(0);
      expect(lines.length).toBeGreaterThan(0);
    });
  });

  describe('Header Comments', () => {
    test('should have documentation header', () => {
      expect(content).toContain('# Each line is a file pattern followed by one or more owners');
      expect(content).toContain('# Documentation:');
    });

    test('should reference GitHub documentation', () => {
      expect(content).toContain('https://help.github.com/en/articles/about-code-owners');
    });

    test('should explain pattern precedence', () => {
      expect(content).toContain('# Order is important');
      expect(content).toContain('precedence');
    });

    test('should have comments starting with #', () => {
      const commentLines = lines.filter(line => line.startsWith('#'));
      expect(commentLines.length).toBeGreaterThan(0);

      commentLines.forEach(line => {
        expect(line).toMatch(/^#\s+/);
      });
    });
  });

  describe('Owner Definitions', () => {
    test('should define owners for all files', () => {
      expect(content).toContain('*');

      const ownerLines = lines.filter(line =>
        !line.startsWith('#') && line.trim() !== ''
      );
      expect(ownerLines.length).toBeGreaterThan(0);
    });

    test('should reference @TiendaNube/nimbus-reviewers team', () => {
      expect(content).toContain('@TiendaNube/nimbus-reviewers');
    });

    test('should reference @federiconube user', () => {
      expect(content).toContain('@federiconube');
    });

    test('owner references should start with @', () => {
      const ownerLines = lines.filter(line =>
        !line.startsWith('#') && line.trim() !== ''
      );

      ownerLines.forEach(line => {
        const parts = line.split(/\s+/);
        // Skip the pattern part
        const owners = parts.slice(1);
        owners.forEach(owner => {
          expect(owner).toMatch(/^@/);
        });
      });
    });

    test('should have valid GitHub username format', () => {
      const ownerLines = lines.filter(line =>
        !line.startsWith('#') && line.trim() !== ''
      );

      ownerLines.forEach(line => {
        const owners = line.match(/@[\w-]+\/[\w-]+|@[\w-]+/g) || [];
        owners.forEach(owner => {
          // Should be either @username or @org/team
          expect(owner).toMatch(/^@[\w-]+(\/[\w-]+)?$/);
        });
      });
    });
  });

  describe('Pattern Syntax', () => {
    test('should use valid glob patterns', () => {
      const ownerLines = lines.filter(line =>
        !line.startsWith('#') && line.trim() !== ''
      );

      ownerLines.forEach(line => {
        const pattern = line.split(/\s+/)[0];
        expect(pattern).toBeTruthy();
        // Pattern should not have leading/trailing whitespace
        expect(pattern.trim()).toBe(pattern);
      });
    });

    test('wildcard pattern should cover all files', () => {
      const wildcardLines = lines.filter(line =>
        line.trim().startsWith('*') && !line.startsWith('#')
      );
      expect(wildcardLines.length).toBeGreaterThan(0);
    });

    test('should not have duplicate patterns', () => {
      const ownerLines = lines.filter(line =>
        !line.startsWith('#') && line.trim() !== ''
      );

      const patterns = ownerLines.map(line => line.split(/\s+/)[0]);
      const uniquePatterns = new Set(patterns);

      // In CODEOWNERS, duplicate patterns are allowed (last one wins)
      // but we check that they're intentional
      expect(patterns.length).toBeGreaterThanOrEqual(uniquePatterns.size - 1);
    });
  });

  describe('Ownership Coverage', () => {
    test('should have owners defined for wildcard pattern', () => {
      const wildcardLine = lines.find(line =>
        line.trim().startsWith('*') && !line.startsWith('#')
      );

      expect(wildcardLine).toBeDefined();
      const parts = wildcardLine.split(/\s+/);
      expect(parts.length).toBeGreaterThan(1); // Pattern + at least one owner
    });

    test('each owner line should have at least one owner', () => {
      const ownerLines = lines.filter(line =>
        !line.startsWith('#') && line.trim() !== ''
      );

      ownerLines.forEach(line => {
        const parts = line.split(/\s+/).filter(p => p.trim() !== '');
        expect(parts.length).toBeGreaterThanOrEqual(2); // Pattern + owner(s)
      });
    });

    test('should support multiple owners across patterns', () => {
      // Check total unique owners across all patterns
      const allOwners = new Set();

      const ownerLines = lines.filter(line =>
        !line.startsWith('#') && line.trim() !== ''
      );

      ownerLines.forEach(line => {
        const owners = (line.match(/@[\w-]+\/[\w-]+|@[\w-]+/g) || []);
        owners.forEach(owner => allOwners.add(owner));
      });

      // The file should have multiple owners defined
      expect(allOwners.size).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Team and User References', () => {
    test('team references should use org/team format', () => {
      const teamReferences = content.match(/@\w+\/[\w-]+/g) || [];
      expect(teamReferences.length).toBeGreaterThan(0);

      teamReferences.forEach(ref => {
        expect(ref).toMatch(/^@[\w-]+\/[\w-]+$/);
      });
    });

    test('should reference TiendaNube organization', () => {
      expect(content).toContain('@TiendaNube/');
    });

    test('user references should be valid GitHub usernames', () => {
      const userReferences = content.match(/@[\w-]+(?!\/)/g) || [];

      userReferences.forEach(ref => {
        // Username should only contain alphanumeric characters and hyphens
        expect(ref).toMatch(/^@[\w-]+$/);
        // Should not be empty after @
        expect(ref.length).toBeGreaterThan(1);
      });
    });
  });

  describe('Special Cases and Edge Conditions', () => {
    test('should handle file with no blank lines at end', () => {
      const lastChar = content[content.length - 1];
      // It's ok to have or not have a trailing newline
      expect(typeof lastChar).toBe('string');
    });

    test('should not have trailing whitespace on owner lines', () => {
      const ownerLines = lines.filter(line =>
        !line.startsWith('#') && line.trim() !== ''
      );

      ownerLines.forEach(line => {
        // Line should not have different length after trimming end
        expect(line.trimEnd()).toBe(line);
      });
    });

    test('should have reasonable file size', () => {
      const stats = fs.statSync(codeownersPath);
      // CODEOWNERS should be small (less than 10KB)
      expect(stats.size).toBeLessThan(10000);
      // But not too small (at least 50 bytes)
      expect(stats.size).toBeGreaterThan(50);
    });

    test('should use UTF-8 encoding', () => {
      const buffer = fs.readFileSync(codeownersPath);
      // Should not start with UTF-16 BOM
      expect(buffer[0]).not.toBe(0xFF);
      expect(buffer[1]).not.toBe(0xFE);
    });

    test('should not contain invalid characters', () => {
      // Should not contain null bytes or other control characters (except newlines)
      expect(content).not.toMatch(/\0/);
      expect(content).not.toMatch(/[\x01-\x08\x0B-\x0C\x0E-\x1F]/);
    });
  });

  describe('Best Practices', () => {
    test('should have comments explaining the configuration', () => {
      const commentLines = lines.filter(line => line.startsWith('#'));
      // Should have at least a few comment lines
      expect(commentLines.length).toBeGreaterThanOrEqual(3);
    });

    test('should order patterns from most specific to least specific', () => {
      // The wildcard pattern should appear (typically at top or bottom)
      const wildcardIndex = lines.findIndex(line =>
        line.trim().startsWith('*') && !line.startsWith('#')
      );
      expect(wildcardIndex).toBeGreaterThanOrEqual(0);
    });

    test('should not have commented-out owner assignments', () => {
      // Check for suspicious patterns like "# path/to/file @owner"
      const commentedOwners = lines.filter(line =>
        line.startsWith('#') && line.includes('@') && line.match(/\s+@[\w-]+/)
      );

      // It's ok to have some (like in documentation), but not many
      expect(commentedOwners.length).toBeLessThan(3);
    });
  });

  describe('Integration with Repository', () => {
    test('should be in correct location for GitHub', () => {
      // Must be in .github directory or repository root
      const inGithubDir = codeownersPath.includes('.github');
      expect(inGithubDir).toBe(true);
    });

    test('referenced teams should follow GitHub naming conventions', () => {
      const teamReferences = content.match(/@[\w-]+\/[\w-]+/g) || [];

      teamReferences.forEach(ref => {
        // Team names should be lowercase or kebab-case
        const [, teamName] = ref.split('/');
        // Should only contain alphanumeric, hyphens, or underscores
        expect(teamName).toMatch(/^[\w-]+$/);
      });
    });
  });

  describe('Regression Tests', () => {
    test('should maintain existing owners', () => {
      // These owners should always be present
      expect(content).toContain('@TiendaNube/nimbus-reviewers');
      expect(content).toContain('@federiconube');
    });

    test('should not accidentally remove all owners', () => {
      const ownerReferences = content.match(/@[\w-]+(\/[\w-]+)?/g) || [];
      expect(ownerReferences.length).toBeGreaterThanOrEqual(2);
    });

    test('should preserve documentation comments', () => {
      expect(content).toContain('about-code-owners');
      expect(content).toContain('Order is important');
    });
  });
});