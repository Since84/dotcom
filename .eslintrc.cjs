module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    // Using Next.js App Router, the 'pages' directory doesn't exist
    'next/no-html-link-for-pages': 'off',
    // clsx has a default export; prevent noisy warnings
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    react: { version: 'detect' },
    // Point Next.js ESLint plugin to app folders in monorepo
    next: {
      rootDir: ['apps/*/'],
    },
  },
  ignorePatterns: ['dist', 'node_modules'],
};
