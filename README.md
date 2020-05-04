# eslint-config-adslot

ESLint configuration for Adslot

## Install

```
npm install -D eslint-config-adslot babel-eslint eslint
```

`eslint` and `babel-eslint` are both required peer dependencies

## Setup

Add the following to your eslint config file, ususally `.eslintrc`,

```
{
  "extends": "adslot"
}
```

## Features

This config includes

- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-lodash
- eslint-plugin-chai-friendly
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
