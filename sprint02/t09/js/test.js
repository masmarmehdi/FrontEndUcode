constdate0 = newDate(1993, 11, 1);
constdate1 = newDate(1998, 0, -33);
constdate2 = newDate("42 03:24:00");
console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday
