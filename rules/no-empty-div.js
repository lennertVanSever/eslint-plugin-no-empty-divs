module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow empty self-closing divs without styling or event handling",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: "code", // Indicate that this rule is auto-fixable
  },
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === "div" && node.selfClosing) {
          const hasProps = node.attributes.length > 0;

          if (!hasProps) {
            context.report({
              node,
              message:
                "Empty self-closing div detected. Use a React fragment if no styling or event handling is needed.",
              fix: function (fixer) {
                return fixer.replaceText(node, "<></>");
              },
            });
          }
        }
      },
    };
  },
};
