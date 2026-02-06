module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{spec,test}.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      rootMode: 'upward',
      presets: ['@babel/preset-env']
    }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@docusaurus|@babel/runtime|@mdx-js)/)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  collectCoverageFrom: [
    'docs/**/*.md',
    'i18n/**/*.md',
    'sidebars.js',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
};