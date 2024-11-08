module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: [
        './**/*.ts',
        './**/*.tsx',
        './**/*.js',
        './**/*.jsx',
      ],
      extends: ['plugin:react-hooks/recommended'],
    },
    {
      files: [
        './**/*.ts',
        './**/*.tsx',
        './**/*.js',
        './**/*.jsx',
        './**/*.vue',
      ],
      plugins: [
        'html',
        'cypress',
        '@typescript-eslint',
        'simple-import-sort',
      ],
      env: {
        'cypress/globals': true,
      },
      globals: {
        document: false,
        window: false,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-strongly-recommended',
        'airbnb-base',
      ],
      rules: {
        curly: ['error', 'all'],
        'newline-after-var': ['error', 'always'],
        'no-continue': 'off',
        'no-alert': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        semi: ['error', 'never'],
        'import/order': 'off',
        'import/extensions': ['error', 'ignorePackages'],
        'no-restricted-imports': ['error',
          {
            paths: [
              {
                name: '..',
                message: 'Import from ../index.js instead.',
              },
              {
                name: '.',
                message: 'Import from ./index.js instead.',
              },
            ],
          },
        ],
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/no-dynamic-require': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'padded-blocks': 'off',
        'class-methods-use-this': 'off',
        'global-require': 'off',
        'func-names': ['error', 'never'],
        'arrow-body-style': 'off',
        'max-len': 'off',
        'no-return-assign': 'off',
        'vue/one-component-per-file': 'off',
        'vue/this-in-template': ['error', 'never'],
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 1,
          },
        }],
        'vue/singleline-html-element-content-newline': 'off',
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'consistent-return': 'off',
        'prefer-destructuring': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': ['error'],
        'lines-between-class-members': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/lines-between-class-members': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/explicit-module-boundary-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
      },
    },
  ],
}
