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
  $("#subscribe").click((_e) => {
    const mail = $("#mail").first().value;
    hideAll();
    $(".subscribing").show();
    subscribe(mail);
  });
}

async function subscribe(mail) {
  hideAll();
  $(".subscribing").show();

  const res = await fetch("/action", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ type: "Subscribe", mail }),
  });

  if (res.status === 200) {
    hideAll();
    $(".subscribe-success").show();
  } else {
    hideAll();
    $(".subscribe-error").show();
  }
}

function showAll() {
  $(".subscribe").show();
  $(".subscribe-error").show();
  $(".subscribe-success").show();
  $(".subscribing").show();
}

function hideAll() {
  $(".subscribe").hide();
  $(".subscribe-error").hide();
  $(".subscribe-success").hide();
  $(".subscribing").hide();
}

main();
