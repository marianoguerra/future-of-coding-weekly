//@format
/*globals SimpleMarkdown*/
const USER = 'marianoguerra',
  REPO = 'future-of-coding-weekly',
  ISSUES_URL = `https://api.github.com/repos/${USER}/${REPO}/issues`;

function toNode(obj) {
  if (obj && obj.tagName) {
    return obj;
  } else {
    return document.createTextNode('' + obj);
  }
}

function ce(tag, attrs, ...body) {
  const node = document.createElement(tag);

  for (let key in attrs) {
    const val = attrs[key];
    node.setAttribute(key, val);
  }

  body.forEach((child, _i, _it) => node.appendChild(toNode(child)));

  return node;
}

function handleComment(comment, node) {
  const container = ce('div', {style: 'margin-top:1em'});
  container.innerHTML = mdToHTML(comment.body);

  node.appendChild(container);
}

function link(url, label) {
  return ce('a', {href: url, target: '_blank'}, label || url);
}

function onCommentsFinished(contributors) {
  const outputNode = document.getElementById('output'),
    contributorsSorted = Object.keys(contributors).sort(),
    contributorsDom = ce('p', {}, 'Contributors: ');

  outputNode.appendChild(
    ce('hr', {style: 'border:0;border-top:1px solid #cccccc'})
  );

  contributorsSorted.forEach((username, i, arr) => {
    const dom = ce('a', {href: contributors[username].html_url}, username);
    contributorsDom.appendChild(dom);

    if (i + 1 < arr.length) {
      contributorsDom.appendChild(toNode(', '));
    }
  });

  outputNode.appendChild(contributorsDom);

  outputNode.appendChild(
    ce(
      'p',
      {},
      'Not a member yet? check the ',
      link('https://futureofcoding.org/', 'Future of Coding Community')
    )
  );

  outputNode.appendChild(
    ce(
      'p',
      {},
      'Want to contribute? Check ',
      link('https://github.com/marianoguerra/future-of-coding-weekly'),
      ' for instructions, have a productive week!'
    )
  );

  document.getElementById(
    'output-html'
  ).textContent = outputNode.innerHTML.replace(/<p>/g, '\n\n<p>').trim();
}

function onComments(comments, baseUrl, count, contributors) {
  const outputNode = document.getElementById('output');

  comments.forEach((comment, _i, _it) => {
    contributors[comment.user.login] = comment.user;
    handleComment(comment, outputNode);
  });

  if (comments.length === 0) {
    onCommentsFinished(contributors);
  } else {
    loadCommentsPage(baseUrl, count, contributors, onComments);
  }
}

function loadCommentsPage(baseUrl, count, contributors, callback) {
  fetchJson(baseUrl + count, comments =>
    callback(comments, baseUrl, count + 1, contributors)
  );
}

function handleIssue(issue) {
  const contributors = {};
  loadCommentsPage(issue.comments_url + '?page=', 1, contributors, onComments);
}

function showMsg(className, txt) {
  const node = document.getElementById('msg');
  node.className = className;
  node.style.display = 'block';
  node.innerText = txt;
}

function noIssuesOpen() {
  showMsg('alert alert-danger', 'No Issues Open');
}

function moreThanOneIssueOpen() {
  showMsg(
    'alert alert-warning',
    'More than one issue open, picking latest one'
  );
}

function handleIssues(data) {
  const openIssues = data
    .filter(issue => issue.state === 'open')
    .sort((issueA, issueB) => issueA.number - issueB.number);

  if (openIssues.length === 0) {
    noIssuesOpen();
  } else {
    if (openIssues.length > 1) {
      moreThanOneIssueOpen();
    }

    handleIssue(openIssues[0]);
  }
}

function fetchJson(url, onData) {
  return fetch(url)
    .then(res => res.json())
    .then(onData);
}

function main() {
  console.log('fetching issues');
  fetchJson(ISSUES_URL, handleIssues);
}

const defaultRules = SimpleMarkdown.defaultRules;

function overrideDefaultHtml(ruleName, overrideFn) {
  return Object.assign({}, defaultRules[ruleName], {html: overrideFn});
}

const customRules = {
    paragraph: overrideDefaultHtml('paragraph', function(node, output, state) {
      return '<p>' + output(node.content, state) + '</p>\n';
    }),
    blockQuote: overrideDefaultHtml('blockQuote', function(
      node,
      output,
      state
    ) {
      return (
        '<blockquote style="margin-left:1em;color:#555555;font-style:italic">' +
        output(node.content, state) +
        '</blockquote>\n'
      );
    })
  },
  rules = Object.assign({}, defaultRules, customRules),
  rawBuiltParser = SimpleMarkdown.parserFor(rules),
  htmlOutput = SimpleMarkdown.htmlFor(SimpleMarkdown.ruleOutput(rules, 'html'));

function mdToHTML(txt) {
  return htmlOutput(rawBuiltParser(txt + '\n\n', {inline: false}));
}

main();
