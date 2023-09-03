import { getInfoForWeekAndDay, MONDAY } from "./history/newsletter.js";

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
  } = getInfoForWeekAndDay(now, dayNumber);

  console.log("nix-shell");
  console.log(`mkdir history/weekly/${curYear}/${monthStr}/${weekStr}/`);
  console.log(`focWeekExport "${prevDateStr}" "${nextDateStr}"`);
  console.log(
    `https://github.com/marianoguerra/future-of-coding-weekly/issues/new?&template=newsletter-week-issue.md&title=Future+of+Coding+Weekly+${curYear}%2F${monthStr}+Week+${weekNumber}`,
  );
  console.log(
    `cd newsletter-content;nikola new_post -f markdown -t "${issueTitle}" -e`,
  );
  console.log("nikola clean; nikola build; nikola serve");
  console.log(newsletterUrl);
}
function dateStrAddDays(days) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().split("T")[0];
}
generateScriptForThisWeek(
  new Date(Date.parse(Deno.args[0] ?? dateStrAddDays(-1))),
  MONDAY,
);
