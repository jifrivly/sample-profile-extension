module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    typescript: true,
    node: true,
    'import/internal-regex': '^src/',
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto', printWidth: 130 }],
    'import/no-commonjs': ['error'],
    'import/first': 'error',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'], 'newlines-between': 'always' }],
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
  },
};
