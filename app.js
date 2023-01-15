//@format
/*globals Set, SimpleMarkdown*/
import {getInfoForWeekAndDay, MONDAY} from './history/newsletter.js';
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

let mdOutput = `# ${getInfoForWeekAndDay(new Date(), MONDAY).issueTitle}`;
function handleComment(comment, node, authors) {
  const container = ce('div', {style: 'margin-top:1em'}),
    markdown = comment.body,
    matchResult = (
      new RegExp(
        '\\[([^\\[]*?)\\]\\((https?://(www\\.)?twitter.com/([^/]+))\\)',
        'gm'
      ).exec(markdown) || []
    ).slice(1);

  mdOutput += comment.body + '\n\n';
  container.innerHTML = mdToHTML(markdown);

  matchResult.forEach((v, i, _arr) => {
    if (i % 4 === 3) {
      const username = v;
      authors.add(username);
    }
  });

  node.appendChild(container);
  node.appendChild(ce('br', {}));
  // The beforebegin and afterend positions work only if the node is in a tree
  // and has an element parent.
  container.insertAdjacentText('beforebegin', '\n\n');
  container.insertAdjacentText('afterend', '\n\n');
}

function link(url, label) {
  return ce('a', {href: url, target: '_blank'}, label || url);
}

function onCommentsFinished(_contributors, authors) {
  console.log(authors);
  const outputNode = document.getElementById('output'),
    authorsSorted = Array.from(authors).sort((userA, userB) =>
      userA.localeCompare(userB)
    );

  outputNode.appendChild(
    ce('hr', {style: 'border:0;border-top:1px solid #cccccc'})
  );

  window.setTimeout(() => {
    const twitterHandles = authorsSorted.map((name) => '@' + name).join(' '),
      textArea = document.getElementById('output-help'),
      textAreaMd = document.getElementById('output-md');
    console.log(twitterHandles);

    textArea.innerHTML = textArea.innerHTML
      .replace('%TWITTER_HANDLES%', twitterHandles)
      .replace(/%TOPICS%/g, textAreaMd.innerHTML.trim().split('\n')[0]);
  }, 500);

  outputNode.appendChild(
    ce(
      'p',
      {},
      '👨🏽‍💻 By ',
      link('https://vis.social/@marianoguerra', '🐘 @marianoguerra@vis.social'),
      ' ',
      link('https://twitter.com/warianoguerra', '🐦 @warianoguerra')
    )
  );

  outputNode.appendChild(
    ce(
      'p',
      {},
      '💬 Not a member yet? Check the ',
      link('https://futureofcoding.org/', 'Future of Coding Community')
    )
  );

  outputNode.appendChild(
    ce(
      'p',
      {},
      '✉️ Not subscribed yet? ',
      link(
        'https://tinyletter.com/marianoguerra/',
        'Subscribe to the Newsletter'
      ),
      ' (',
      link(
        'https://tinyletter.com/marianoguerra/archive',
        'Newsletter Archive'
      ),
      ')'
    )
  );

  outputNode.appendChild(
    ce(
      'p',
      {},
      '🎙 Prefer podcasts? check the ',
      link('https://futureofcoding.org/episodes/', 'Future of Coding Podcast')
    )
  );

  outputNode.appendChild(ce('p', {}, ''));

  document.getElementById('output-html').textContent = outputNode.innerHTML
    .replace(/<p>/g, '\n\n<p>')
    .trim();
  document.getElementById('output-md').textContent = mdOutput;
}

function addCommentSeparator(_outputNode) {
  //outputNode.appendChild(ce('p', {style: 'text-align:center'}, '🚥'));
}

function onComments(comments, baseUrl, count, contributors, authors) {
  const outputNode = document.getElementById('output'),
    lastIndex = comments.length - 1;

  comments.forEach((comment, i, _it) => {
    contributors[comment.user.login] = comment.user;
    handleComment(comment, outputNode, authors);
    if (i < lastIndex) {
      addCommentSeparator(outputNode);
    }
  });

  if (comments.length === 0) {
    onCommentsFinished(contributors, authors);
  } else {
    loadCommentsPage(baseUrl, count, contributors, authors, onComments);
  }
}

function loadCommentsPage(baseUrl, count, contributors, authors, callback) {
  fetchJson(baseUrl + count, (comments) =>
    callback(comments, baseUrl, count + 1, contributors, authors)
  );
}

function handleIssue(issue) {
  const contributors = {},
    authors = new Set();
  loadCommentsPage(
    issue.comments_url + '?page=',
    1,
    contributors,
    authors,
    onComments
  );
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
    .filter((issue) => issue.state === 'open')
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
    .then((res) => res.json())
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
    paragraph: overrideDefaultHtml('paragraph', function (node, output, state) {
      return '<p>' + output(node.content, state) + '</p>\n';
    }),
    blockQuote: overrideDefaultHtml(
      'blockQuote',
      function (node, output, state) {
        return (
          '<blockquote style="margin-left:1em;color:#555555;font-style:italic">' +
          output(node.content, state) +
          '</blockquote>\n'
        );
      }
    ),
  },
  rules = Object.assign({}, defaultRules, customRules),
  rawBuiltParser = SimpleMarkdown.parserFor(rules),
  htmlOutput = SimpleMarkdown.htmlFor(SimpleMarkdown.ruleOutput(rules, 'html'));

function mdToHTML(txt) {
  return htmlOutput(rawBuiltParser(txt + '\n\n', {inline: false}));
}

main();
