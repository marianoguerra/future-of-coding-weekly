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

  console.log("bash");
  console.log("source ./bin/activate");
  console.log("nu");
  console.log(`focWeekExport "${prevDateStr}" "${nextDateStr}"`);
  console.log(
    `https://github.com/marianoguerra/future-of-coding-weekly/issues/new?&template=newsletter-week-issue.md&title=Future+of+Coding+Weekly+${curYear}%2F${monthStr}+Week+${weekNumber}`,
  );
  console.log(`mkdir history/weekly/${curYear}/${monthStr}/${weekStr}/`);
  console.log(
    `nix-shell;\ncd newsletter-content;nikola new_post -f markdown -t "${issueTitle}" -e`,
  );
  console.log("nikola clean; nikola build; nikola serve");
  console.log(newsletterUrl);
}

generateScriptForThisWeek(new Date(), MONDAY);
