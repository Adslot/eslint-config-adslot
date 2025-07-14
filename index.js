import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginLodash from 'eslint-plugin-lodash';
import eslintPluginChaiFriendly from 'eslint-plugin-chai-friendly';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginNoSnapshotTesting from 'eslint-plugin-no-snapshot-testing';
import eslintTypescriptParser from '@typescript-eslint/parser';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default defineConfig([
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.cjs', '.js', '.jsx', '.mjs'],
        },
      },
    },
    plugins: {
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      lodash: eslintPluginLodash,
      'chai-friendly': eslintPluginChaiFriendly,
    },

    rules: {
      // http://eslint.org/docs/rules/
      'array-callback-return': 'error',
      'default-case': ['error', { commentPattern: '^no default$' }],
      eqeqeq: ['error', 'smart'],
      'no-array-constructor': 'error',
      'no-caller': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      'no-const-assign': 'error',
      'no-control-regex': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-implied-eval': 'error',
      'no-invalid-regexp': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-native-reassign': 'error',
      'no-negated-in-lhs': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-redeclare': ['error', { builtinGlobals: false }],
      'no-regex-spaces': 'error',
      'no-restricted-syntax': ['error', 'WithStatement'],
      'no-script-url': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-shadow': ['error', { allow: ['cb', 'err', 'done', 'next'] }],
      'no-console': 'error',

      'no-unused-expressions': 'off',
      'chai-friendly/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      'no-unused-labels': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'all',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,
        },
      ],
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      'no-with': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'require-yield': 'error',
      strict: ['error', 'never'],
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'no-restricted-properties': [
        'error',
        {
          object: 'require',
          property: 'ensure',
          message:
            'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
        },
        {
          object: 'System',
          property: 'import',
          message:
            'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
        },
      ],
      'getter-return': 'error',

      // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
      'import/first': 'error',
      'import/no-amd': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': [
        'error',
        { groups: [['builtin', 'external', 'internal']] },
      ],
      'import/no-cycle': ['error', { ignoreExternal: true }],
      'import/no-unresolved': ['error', { commonjs: true }],
      'import/no-duplicates': 'error',

      // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
      'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-danger-with-children': 'error',
      // Disabled because of undesirable warnings
      // See https://github.com/facebook/create-react-app/issues/5204 for
      // blockers until its re-enabled
      // 'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-is-mounted': 'error',
      'react/no-typos': 'error',
      'react/react-in-jsx-scope': 'error',
      'react/require-render-return': 'error',
      'react/style-prop-object': 'error',

      // Prevent missing props validation in a React component definition
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
      'react/prop-types': [
        'error',
        {
          ignore: [],
          customValidators: [],
          skipUndeclared: true, // only enable the check for components that have .propTypes declared
        },
      ],

      // Prevent invalid characters from appearing in markup
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
      'react/no-unescaped-entities': 'error',

      // Prevent using this.state within a this.setState
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
      'react/no-access-state-in-setstate': 'error',

      // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          aspects: ['noHref', 'invalidHref'],
        },
      ],
      'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/iframe-has-title': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',

      // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
      'react-hooks/rules-of-hooks': 'error',

      // https://github.com/wix/eslint-plugin-lodash
      'lodash/callback-binding': 'error',
      'lodash/collection-method-value': 'error',
      'lodash/collection-return': 'error',
      'lodash/no-double-unwrap': 'error',
      'lodash/no-extra-args': 'error',
      'lodash/no-unbound-this': 'error',
      'lodash/unwrap': 'error',
      'lodash/chain-style': ['error', 'as-needed'],
      'lodash/chaining': ['error', 'always'],
      'lodash/path-style': ['error', 'string'],
    },
  },
  {
    files: ['**/*.ts?(x)'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: eslintTypescriptParser,
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
    },

    // If adding a typescript-eslint version of an existing ESLint rule,
    // make sure to disable the ESLint rule here.
    rules: {
      // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
      'default-case': 'off',
      // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
      'no-dupe-class-members': 'off',
      // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
      'no-undef': 'off',

      // Add TypeScript specific rules (and turn off ESLint equivalents)
      '@typescript-eslint/consistent-type-assertions': 'error',

      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
        },
      ],

      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',

      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['**/*.{spec,test}.{ts,tsx,js,jsx}'],
    ...eslintPluginJest.configs['flat/recommended'],
    plugins: {
      'no-snapshot-testing': eslintPluginNoSnapshotTesting,
      jest: eslintPluginJest,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-snapshot-testing/no-snapshot-testing': 'error',

      // https://github.com/jest-community/eslint-plugin-jest
      // could also be used in non-jest tests
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
    },
  },
]);
