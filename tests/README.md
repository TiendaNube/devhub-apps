# Documentation Tests

This directory contains comprehensive tests for the Docusaurus documentation project.

## Test Structure

```
tests/
├── documentation/       # Tests for markdown documentation files
│   ├── landing-page.test.js
│   └── nube-sdk.test.js
├── configuration/       # Tests for configuration files
│   ├── sidebars.test.js
│   └── codeowners.test.js
├── assets/             # Tests for static assets
│   └── images.test.js
└── integration/        # Integration tests
    └── documentation.test.js
```

## Test Coverage

### Documentation Tests
- **landing-page.test.js**: Tests for landing page documentation in all languages (PT, EN, ES)
  - Validates frontmatter format
  - Checks content structure and sections
  - Verifies translation consistency
  - Ensures proper markdown formatting

- **nube-sdk.test.js**: Tests for Nube SDK documentation
  - Getting Started guide validation
  - State documentation structure
  - Component documentation (Image component)
  - Slot documentation (Checkout and Storefront slots)
  - Code example validation
  - TypeScript syntax verification

### Configuration Tests
- **sidebars.test.js**: Tests for sidebar configuration
  - Validates sidebar structure
  - Checks document references
  - Verifies Nube SDK categories
  - Tests for duplicate entries
  - Validates nesting depth

- **codeowners.test.js**: Tests for CODEOWNERS file
  - Format validation
  - Pattern syntax verification
  - Owner reference validation
  - Team and user reference checks

### Asset Tests
- **images.test.js**: Tests for static image assets
  - Verifies image existence
  - Validates image formats (PNG)
  - Checks file sizes
  - Tests image references in documentation
  - Validates naming conventions

### Integration Tests
- **documentation.test.js**: Cross-cutting integration tests
  - Cross-reference validation
  - Internal link checking
  - Image reference validation
  - Translation consistency
  - Code example consistency
  - Build configuration validation

## Running Tests

### Run all tests
```bash
yarn test
# or
npm test
```

### Run tests in watch mode
```bash
yarn test:watch
# or
npm run test:watch
```

### Run tests with coverage
```bash
yarn test:coverage
# or
npm run test:coverage
```

### Run tests with verbose output
```bash
yarn test:verbose
# or
npm run test:verbose
```

### Run specific test file
```bash
yarn test tests/documentation/landing-page.test.js
# or
npm test tests/documentation/landing-page.test.js
```

### Run tests matching pattern
```bash
yarn test --testNamePattern="landing-page"
# or
npm test -- --testNamePattern="landing-page"
```

## Test Philosophy

These tests follow documentation testing best practices:

1. **Content Validation**: Ensures documentation has required sections and proper structure
2. **Format Validation**: Verifies markdown syntax and frontmatter
3. **Consistency Checks**: Validates consistency across translations and versions
4. **Reference Validation**: Checks that all links and image references are valid
5. **Integration Testing**: Ensures all parts work together correctly

## Adding New Tests

When adding new documentation:

1. Add tests to validate the new content structure
2. Check for proper frontmatter
3. Validate any code examples
4. Ensure translations are consistent
5. Add integration tests for cross-references

## Test Conventions

- Test files use `.test.js` extension
- Test suites use `describe()` blocks for organization
- Individual tests use `test()` or `it()` functions
- Tests are organized by feature/file being tested
- Edge cases and error conditions are explicitly tested

## CI/CD Integration

These tests can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Run tests
  run: yarn test

- name: Check coverage
  run: yarn test:coverage
```

## Troubleshooting

### Tests failing after documentation update
- Ensure all referenced files exist
- Check that translations are up to date
- Verify image references are correct
- Update tests if intentional breaking changes were made

### Image tests failing
- Verify images exist in `static/img/pt/` directory
- Check image file format matches expectations
- Ensure images are properly referenced in documentation

### Link tests failing
- Check for broken relative links
- Verify referenced documents exist
- Update links if files were moved or renamed

## Additional Notes

- Tests use Node.js `fs` module for file system access
- Tests are designed to be fast and run locally
- All tests should be deterministic and not depend on external services
- Tests provide helpful error messages for debugging