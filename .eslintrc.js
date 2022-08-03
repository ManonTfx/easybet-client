module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  plugins: [],
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb', // Import this BEFORE Prettier so prettier config overrides other formatting rules
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    camelcase: 'off',
    'no-use-before-define': 'off',
    'no-console': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    'prefer-destructuring': ['error', { object: false, array: false }],
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' },
    ],
    'react/prop-types': 1,
  },
};
