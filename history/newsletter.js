const MONDAY = 1;

function cloneDate(d) {
  return new Date(d.getTime());
}

function findNextWeekDay(d0, dayNumber) {
  const d = cloneDate(d0);

  while (d.getUTCDay() !== dayNumber) {
    d.setUTCDate(d.getUTCDate() + 1);
  }

  return d;
}

function countWeekDayUntilIncluding(d0, dayNumber) {
  const d = cloneDate(d0);
  d.setUTCDate(1);

  let count = 0;

  do {
    if (d.getUTCDay() === dayNumber) {
      count += 1;
    }

    d.setUTCDate(d.getUTCDate() + 1);
  } while (d0.getTime() >= d.getTime());

  return count;
}

function formatDay(d) {
  return d.toISOString().split("T")[0];
}

function zeroPad(v) {
  return v < 10 ? "0" + v : "" + v;
}

function getInfoForWeekAndDay(now, dayNumber) {
  const nextDay = findNextWeekDay(now, dayNumber),
    prevDay = cloneDate(nextDay),
    weekNumber = countWeekDayUntilIncluding(nextDay, dayNumber),
    weekStr = `W${weekNumber}`,
    monthStr = zeroPad(now.getUTCMonth() + 1),
    curYear = now.getUTCFullYear(),
    issueTitle =
      `Future of Coding Weekly ${curYear}/${monthStr} Week ${weekNumber}`,
    newsletterUrl =
      `https://newsletter.futureofcoding.org/posts/future-of-coding-weekly-${curYear}${monthStr}-week-${weekNumber}/`;

  prevDay.setUTCDate(prevDay.getUTCDate() - 7);

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

export { getInfoForWeekAndDay, MONDAY };
