const MONDAY = 1;

function cloneDate(d) {
  return new Date(d.getTime());
}

function findNextWeekDay(d0, dayNumber) {
  const d = cloneDate(d0);

  while (d.getDay() !== dayNumber) {
    d.setDate(d.getDate() + 1);
  }

  return d;
}

function countWeekDayUntilIncluding(d0, dayNumber) {
  const d = cloneDate(d0);
  d.setDate(1);

  let count = 0;

  do {
    if (d.getDay() === dayNumber) {
      count += 1;
    }

    d.setDate(d.getDate() + 1);
  } while (d0.getDate() >= d.getDate());

  return count;
}

function formatDay(d) {
  return d.toISOString().split('T')[0];
}

function zeroPad(v) {
  return v < 10 ? '0' + v : '' + v;
}

function getInfoForWeekAndDay(now, dayNumber) {
  const nextDay = findNextWeekDay(now, dayNumber),
    prevDay = cloneDate(nextDay),
    weekNumber = countWeekDayUntilIncluding(nextDay, dayNumber),
    weekStr = `W${weekNumber}`,
    monthStr = zeroPad(now.getMonth() + 1),
    curYear = now.getFullYear(),
    issueTitle = `Future of Coding Weekly ${curYear}/${monthStr} Week ${weekNumber}`,
    newsletterUrl = `https://newsletter.futureofcoding.org/posts/future-of-coding-weekly-${curYear}${monthStr}-week-${weekNumber}/`;

  prevDay.setDate(prevDay.getDate() - 7);

  const prevDateStr = formatDay(prevDay),
    nextDateStr = formatDay(nextDay);

  return {
    prevDay,
    nextDay,
    prevDateStr,
    nextDateStr,
    weekNumber,
    weekStr,
    monthStr,
    curYear,
    issueTitle,
    newsletterUrl,
  };
}

export {getInfoForWeekAndDay, MONDAY};
