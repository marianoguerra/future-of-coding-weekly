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
  const conversationsUrl = `https://marianoguerra.github.io/Feeling-of-Computing/conversations/?from-date=${prevDateStr}&to-date=${nextDateStr}`;
  const mailPathHtml = `future-of-newsletters/mail-sent/${dateDir}/mail.html`;
  const mailPathText = `future-of-newsletters/mail-sent/${dateDir}/mail.txt`;
  const blogPostFileName = `feeling-of-computing-weekly-${curYear}${monthStr}-week-${weekNumber}.md`;

  //console.log(`mkdir history/weekly/${dateDir}/`);
  console.log(`source util.nu`);
  console.log(`mkdir future-of-newsletters/mail-sent/${dateDir}/`);
  console.log(
    `sed 's/title = "Feeling of Computing Weekly"/title = "Feeling of Computing Weekly ${curYear}\\/${monthStr} Week ${weekNumber}"/g' future-of-newsletters/resources/mail-send-config.toml |\n save future-of-newsletters/mail-sent/${dateDir}/config.toml`,
  );
  //console.log(`focWeekExport "${prevDateStr}" "${nextDateStr}"`);
  //console.log(`git add history; git commit -m "weekly dump"; git push origin`);
  //console.log(`focAfterWeeklyPush`);
  console.log(
    `cp ~/src/experiments/slack-utils/conversations.html ${mailPathHtml}`,
  );
  console.log(
    `cp ~/src/experiments/slack-utils/conversations.md ${mailPathText}`,
  );
  console.log(
    `cd newsletter-content;uv tool run nikola new_post -f markdown -t "${issueTitle}"`,
  );
  console.log(`sed -i '$ d' posts/${blogPostFileName}`);
  console.log(
    `cat ~/src/experiments/slack-utils/conversations.md | save --append posts/${blogPostFileName}`,
  );
  console.log(
    'uv tool run nikola clean; uv tool run nikola build; uv tool run nikola serve',
  );
  console.log();
  console.log('cd ..');
  console.log('git add newsletter*');
  console.log(`git add future-of-newsletters/mail-sent/${dateDir}/`);
  console.log("git commit -m 'Newsletter'");
  console.log('git push origin');
  console.log('focRemotePull');
  console.log('firefox ' + newsletterUrl);
  console.log(
    `cd future-of-newsletters/foc-server/;cargo run -- send-newsletter --config-path ./resources/base-config.toml --mail-path ../mail-sent/${dateDir}/ --db-path ~/.foc/justmariano.db`,
  );
  console.log();
  console.log(
    `cargo run -- send-newsletter --config-path ./resources/base-config.toml --mail-path ../mail-sent/${dateDir}/ --db-path ~/.foc/foc.db`,
  );
  console.log(
    `open unsub.csv | from csv | each {|line| foc unsubscribe --db-path ./foc.db --mail $line.mail }`,
  );
  console.log();
  console.log(
    `claude -p "Read the content of @${mailPathText} and generate a list of the at most 5 most interesting links in the newsletter sorted from most interesting to least insteresting, each item should start with an emoji that represents the link, it should be a link in markdown format, the description should be a to the point description of the link and be the link text, don't add text after the link, if the existing one is good enough for someone to know what's in the link then use that one, don't add markdown list syntax, the emojis are the 'bullet points'"`,
  );
  console.log();
  console.log(
    `📟️ Feeling of Computing Newsletter\n\n.\n\n🔗️ ${newsletterUrl}\n\n🌐️ ${conversationsUrl}`,
  );
  console.log();
  console.log('the to-date is one day more than it should in converstions url');
}
function dateStrAddDays(days) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().split('T')[0];
}
generateScriptForThisWeek(
  new Date(Date.parse(Deno.args[0] ?? dateStrAddDays(-1))),
  MONDAY,
);
