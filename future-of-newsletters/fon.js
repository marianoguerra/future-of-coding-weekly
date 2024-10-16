import path from "path";
import { mkdir } from "node:fs/promises";
import { mdToHTML } from "../history/md.js";

class MailGunConfig {
  constructor(url, from, apiKey) {
    this.url = url;
    this.from = from;
    this.apiKey = apiKey;
  }

  static async fromTomlString(s) {
    const data = Bun.TOML.parse(s),
      { mailgun = {} } = data,
      { url = "", from = "", apiKey = "" } = mailgun,
      config = new MailGunConfig(url, from, apiKey);

    return config;
  }

  static async fromTomlFile(path) {
    return MailGunConfig.fromTomlString(await readFileAsString(path));
  }

  getFormData(to, mailInfo) {
    const { subject, text, html } = mailInfo,
      formData = new FormData();

    formData.append("from", this.from);
    formData.append("to", to);
    formData.append("subject", subject);
    formData.append("text", text);
    formData.append("html", html);

    return formData;
  }

  getFetchOptions(to, mailInfo) {
    const formData = this.getFormData(to, mailInfo),
      headers = new Headers({
        "Authorization": "Basic " + btoa("api:" + this.apiKey),
      });

    return {
      method: "POST",
      headers: headers,
      body: formData,
    };
  }
}

class MailInfo {
  constructor(text, html, subject) {
    this.text = text;
    this.html = html;
    this.subject = subject;
  }

  static async fromFolderPath(dirPath) {
    const { textPath, htmlPath, infoPath } = MailInfo.getMailDirPaths(dirPath),
      text = await readFileAsString(textPath),
      html = await readFileAsString(htmlPath),
      info = await readTomlFile(infoPath);

    return new MailInfo(text, html, info.subject);
  }

  static getMailDirPaths(dirPath) {
    const textPath = path.join(dirPath, "mail.txt"),
      htmlPath = path.join(dirPath, "mail.html"),
      infoPath = path.join(dirPath, "mail.toml");

    return { textPath, htmlPath, infoPath };
  }

  async toFolderPath(dirPath) {
    const { textPath, htmlPath, infoPath } = MailInfo.getMailDirPaths(dirPath);
    await mkdir(dirPath, { recursive: true });
    await writeStringToFile(textPath, this.text);
    await writeStringToFile(htmlPath, this.html);
    await writeStringToFile(
      infoPath,
      `subject = ${JSON.stringify(this.subject)}`,
    );
  }
}

async function readFileAsString(path) {
  const file = Bun.file(path);
  return await file.text();
}

async function readTomlFile(path) {
  return Bun.TOML.parse(await readFileAsString(path));
}

async function writeStringToFile(path, text) {
  await Bun.write(path, text);
}

async function mailsFromCsv(csvPath) {
  // tiny letter format
  const lines = (await readFileAsString(csvPath)).split("\n").slice(1),
    r = [];
  for (const line of lines) {
    if (line) {
      const mail = line.split(",")[0];
      r.push(mail);
    }
  }

  return r;
}

async function sendMail(to, config, mailInfo) {
  const opts = config.getFetchOptions(to, mailInfo),
    res = await fetch(config.url, opts),
    body = await res.text();

  return { res, body };
}

async function main([command, ...args]) {
  if (command === "send") {
    const [configPath, mailFolderPath, subsCsvPath] = args,
      config = await MailGunConfig.fromTomlFile(configPath),
      mailInfo = await MailInfo.fromFolderPath(mailFolderPath);

    for (const to of await mailsFromCsv(subsCsvPath)) {
      const { res, body } = await sendMail(to, config, mailInfo);
      console.log(res, body);
    }
  } else if (command === "mk-mail-dir") {
    const [subject, mdFilePath, dirPath] = args,
      text = await readFileAsString(mdFilePath),
      // remove top level html comment with nikola metadata
      html = mdToHTML(text.replace(/<!--[\s\S]*?-->/, "")),
      mailInfo = new MailInfo(text, html, subject);

    await mailInfo.toFolderPath(dirPath);
  } else {
    console.log("wat?");
  }
}

main(Bun.argv.slice(2));
