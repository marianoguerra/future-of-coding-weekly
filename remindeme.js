import {getInfoForWeekAndDay, MONDAY} from './history/newsletter.js';

function generateScriptForThisWeek(now, dayNumber) {
  const {prevDateStr, nextDateStr, weekStr, monthStr, curYear, issueTitle} =
    getInfoForWeekAndDay(now, dayNumber);

  console.log(`focWeekExport "${prevDateStr}" "${nextDateStr}"`);
  console.log(`focApp.exportThisAsNewsletterWithWeek('${weekStr}')`);
  console.log(issueTitle);
  console.log(`mkdir -p history/weekly/${curYear}/${monthStr}/${weekStr}/`);
}

generateScriptForThisWeek(new Date(), MONDAY);
