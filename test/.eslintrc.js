module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
