module.exports = {
  extends: ['eslint-config-react-typescript/lib/react'],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
