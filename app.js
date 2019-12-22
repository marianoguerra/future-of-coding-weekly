//@format

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
  node.appendChild(ce('p', {}, comment.body));
}

function link(url, label) {
  return ce('a', {href: url, target: '_blank'}, label || url);
}

function onComments(comments) {
  const outputNode = document.getElementById('output'),
    contributors = {};
  comments.forEach((comment, _i, _it) => {
    contributors[comment.user.login] = comment.user;
    handleComment(comment, outputNode);
  });
  outputNode.appendChild(
    ce('hr', {style: 'border:0;border-top:1px solid #cccccc'})
  );
  outputNode.appendChild(
    ce(
      'p',
      {style: 'text-align:center'},
      'Want to contribute? Check ',
      link('https://github.com/marianoguerra/future-of-coding-weekly'),
      ' for instructions, have a productive week!'
    )
  );

  const contributorsSorted = Object.keys(contributors).sort(),
    contributorsDom = ce('p', {}, 'Contributors: ');

  contributorsSorted.forEach((username, i, arr) => {
    const dom = ce('a', {href: contributors[username].html_url}, username);
    contributorsDom.appendChild(dom);

    if (i + 1 < arr.length) {
      contributorsDom.appendChild(toNode(', '));
    }
  });

  outputNode.appendChild(contributorsDom);

  document.getElementById(
    'output-html'
  ).textContent = outputNode.innerHTML.replace(/<p>/g, '\n\n<p>').trim();
}

function handleIssue(issue) {
  fetchJson(issue.comments_url, onComments);
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

main();
