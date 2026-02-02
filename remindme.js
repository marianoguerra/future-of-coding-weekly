import {getInfoForWeekAndDay, MONDAY} from './history/newsletter.js';

function generateScriptForThisWeek(now, dayNumber) {
  const {
      prevDateStr,
      nextDateStr,
      weekStr,
      weekNumber,
      monthStr,
      curYear,
      issueTitle,
      newsletterUrl,
    } = getInfoForWeekAndDay(now, dayNumber),
    dateDir = `${curYear}/${monthStr}/${weekStr}`;

  console.log(`mkdir history/weekly/${dateDir}/`);
  console.log(`mkdir future-of-newsletters/mail-sent/${dateDir}/`);
  console.log(
    `sed 's/title = "Future of Coding Weekly"/title = "Future of Coding Weekly ${curYear}\\/${monthStr} Week ${weekNumber}"/g' future-of-newsletters/resources/mail-send-config.toml |\n save future-of-newsletters/mail-sent/${dateDir}/config.toml`
  );
  console.log(`focWeekExport "${prevDateStr}" "${nextDateStr}"`);
  console.log(
    `https://github.com/marianoguerra/future-of-coding-weekly/issues/new?&template=newsletter-week-issue.md&title=Future+of+Coding+Weekly+${curYear}%2F${monthStr}+Week+${weekNumber}`
  );
  console.log(`git add history; git commit -m "weekly dump"; git push origin`);
  console.log(`focAfterWeeklyPush`);
  console.log(`nvim future-of-newsletters/mail-sent/${dateDir}/mail.html future-of-newsletters/mail-sent/${dateDir}/mail.txt`);
  console.log(
    `cd newsletter-content;uv tool run nikola new_post -f markdown -t "${issueTitle}" -e`
  );
  console.log('uv tool run nikola clean; uv tool run nikola build; uv tool run nikola serve');
  console.log('cd ..');
  console.log('git add newsletter*');
  console.log(`git add future-of-newsletters/mail-sent/${dateDir}/`);
  console.log("git commit -m 'Newsletter and Links'");
  console.log('git push origin');
  console.log('focRemotePull');
  console.log('firefox ' + newsletterUrl);
  console.log(
    `cd future-of-newsletters/foc-server/;cargo run -- send-newsletter --config-path ./resources/base-config.toml --mail-path ../mail-sent/${dateDir}/ --db-path ~/.foc/justmariano.db`
  );
  console.log(
    `cargo run -- send-newsletter --config-path ./resources/base-config.toml --mail-path ../mail-sent/${dateDir}/ --db-path ~/.foc/foc.db`
  );
  console.log(`open unsub.csv | from csv | each {|line| foc unsubscribe --db-path ./foc.db --mail $line.mail }`);
}
function dateStrAddDays(days) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().split('T')[0];
}
generateScriptForThisWeek(
  new Date(Date.parse(Deno.args[0] ?? dateStrAddDays(-1))),
  MONDAY
);
