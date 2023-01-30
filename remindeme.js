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
  } = getInfoForWeekAndDay(now, dayNumber);

  console.log(`focWeekExport "${prevDateStr}" "${nextDateStr}"`);
  console.log(
    `https://github.com/marianoguerra/future-of-coding-weekly/issues/new?&template=newsletter-week-issue.md&title=Future+of+Coding+Weekly+${curYear}%2F${monthStr}+Week+${weekNumber}`
  );
  console.log(issueTitle);
  console.log(`mkdir history/weekly/${curYear}/${monthStr}/${weekStr}/`);
  console.log(
    `nix-shell;cd newsletter-content;nikola new_post -f markdown -t "${issueTitle}"`
  );
  console.log(
    `nvim posts/future-of-coding-weekly-${curYear}${monthStr}-week-${weekNumber}.md`
  );
  console.log(newsletterUrl);
}

generateScriptForThisWeek(new Date(), MONDAY);
