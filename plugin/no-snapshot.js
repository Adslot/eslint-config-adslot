function isSnapshot(name) {
  return [
    'toMatchSnapshot',
    'toMatchInlineSnapshot',
    'toThrowErrorMatchingSnapshot',
    'toThrowErrorMatchingInlineSnapshot',
  ].some((method) => method === name);
}

const noSnapshot = {
  meta: {
    docs: {
      description: 'Disallows jest snapshots.',
    },
    messages: {
      notAllowed: 'Snapshot testing is disallowed',
    },
    fixable: 'code',
  },

  create(context) {
    return {
      CallExpression({ callee: { property } }) {
        if (isSnapshot(property && property.name)) {
          context.report({
            message:
              'Do not use {{method}} or related methods that generate jest snapshots.',
            node: property,
            data: { method: property.name },
          });
        }
      },
    };
  },
};

module.exports = noSnapshot;
