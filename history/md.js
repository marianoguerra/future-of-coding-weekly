import { SimpleMarkdown } from "./lib/simple-markdown.js";

const defaultRules = Object.assign({}, SimpleMarkdown.defaultRules);
delete defaultRules.reflink;

function overrideDefaultHtml(ruleName, overrideFn) {
  return Object.assign({}, defaultRules[ruleName], { html: overrideFn });
}

const customRules = {
    paragraph: overrideDefaultHtml("paragraph", function (node, output, state) {
      return "<p>" + output(node.content, state) + "</p>\n";
    }),
    blockQuote: overrideDefaultHtml(
      "blockQuote",
      function (node, output, state) {
        return "<blockquote>" + output(node.content, state) + "</blockquote>\n";
      },
    ),
  },
  rules = Object.assign({}, defaultRules, customRules),
  rawBuiltParser = SimpleMarkdown.parserFor(rules),
  htmlOutput = SimpleMarkdown.htmlFor(SimpleMarkdown.ruleOutput(rules, "html"));

export function mdToHTML(txt) {
  return htmlOutput(rawBuiltParser(txt + "\n\n", { inline: false }));
}
