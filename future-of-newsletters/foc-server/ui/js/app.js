class QueryResult extends Array {
  static query(sel) {
    return this.from(document.querySelectorAll(sel));
  }

  on(eventName, fn) {
    this.forEach((node) => node.addEventListener(eventName, fn));
  }

  click(fn) {
    return this.on("click", fn);
  }

  first(dval) {
    return this.at(0) ?? dval;
  }

  hide() {
    this.forEach((n) => {
      n.style.display = "none";
    });
  }

  show() {
    this.forEach((n) => {
      n.style.display = "block";
    });
  }

  text(v) {
    this.forEach((n) => {
      n.innerText = v;
    });
  }
}

const $ = QueryResult.query.bind(QueryResult);

function main() {
  const params = new URLSearchParams(location.search),
    action = params.get("action"),
    mail = params.get("mail"),
    token = params.get("token");

  if (action === "confirm") {
    $("#subscribe,#unsubscribe").hide();
    $("#confirm").show();
    setupConfirm(mail, token);
  } else if (action === "unsubscribe") {
    $("#subscribe,#confirm").hide();
    $("#unsubscribe").show();
    setupUnsubscribe(mail, token);
  } else {
    setupSubscribe();
  }
}

function setupSubscribe() {
  const { showLoading, showSuccess, showErrorExtraText, hideMsgs } = makeDomFns(
    "#subscribe",
  );

  async function subscribe(mail) {
    hideMsgs();
    showLoading();

    const res = await sendAction({ type: "Subscribe", mail });

    if (res.status === 200) {
      hideMsgs();
      showSuccess();
    } else {
      hideMsgs();
      showErrorExtraText(`Error Reason: "${res.body.reason}"`);
    }
  }

  $("#subscribe-btn").click((_e) => {
    const mail = $("#mail").first().value;
    subscribe(mail);
  });
}

function setupConfirm(mail, token) {
  const { showLoading, showSuccess, showErrorExtraText, hideMsgs } = makeDomFns(
    "#confirm",
  );

  async function confirm(mail, token) {
    hideMsgs();
    showLoading();

    const res = await sendAction({ type: "Confirm", mail, token });

    if (res.status === 200) {
      hideMsgs();
      showSuccess();
    } else {
      hideMsgs();
      showErrorExtraText(`Error Reason: "${res.body.reason}"`);
    }
  }

  confirm(mail, token);
}

function setupUnsubscribe(mail, token) {
  const { showLoading, showSuccess, showErrorExtraText, hideMsgs } = makeDomFns(
    "#unsubscribe",
  );

  async function unsubscribe(mail, token) {
    hideMsgs();
    showLoading();

    const res = await sendAction({ type: "Unsubscribe", mail, token });

    if (res.status === 200) {
      hideMsgs();
      showSuccess();
    } else {
      hideMsgs();
      showErrorExtraText(`Error Reason: "${res.body.reason}"`);
    }
  }

  unsubscribe(mail, token);
}

function makeDomFns(prefix) {
  function selP(sel) {
    return $(`${prefix} ${sel}`);
  }

  function showP(sel) {
    selP(sel).show();
  }

  function hideP(sel) {
    selP(sel).hide();
  }

  function setText(sel, text) {
    selP(sel).text(text);
  }

  function showLoading() {
    showP(".msg-loading");
  }

  function showSuccess() {
    showP(".msg-success");
  }

  function showError() {
    showP(".msg-error");
  }

  function showErrorExtraText(text) {
    showError();
    showP(".error-extra-line");
    setText(".error-extra-line", text);
  }

  function hideMsgs() {
    selP(".msg").hide();
  }

  return { showLoading, showSuccess, showError, hideMsgs, showErrorExtraText };
}

async function sendAction(reqBody) {
  const res = await fetch("/action", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reqBody),
    }),
    body = await res.json();

  return { status: res.status, body, res };
}

main();
