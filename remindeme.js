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
  } = getInfoForWeekAndDay(now, dayNumber);

  console.log(`focWeekExport "${prevDateStr}" "${nextDateStr}"`);
  console.log(issueTitle);
  console.log(`mkdir history/weekly/${curYear}/${monthStr}/${weekStr}/`);
  console.log(
    `nix-shell;cd newsletter-content;nikola new_post -f markdown -t "${issueTitle}"`
  );
  console.log(
    `nvim posts/future-of-coding-weekly-${curYear}${monthStr}-week-${weekNumber}.md`
  );
}

generateScriptForThisWeek(new Date(), MONDAY);
