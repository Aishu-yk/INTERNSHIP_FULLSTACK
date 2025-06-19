//LeapYear

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}
console.log(isLeapYear(2024)); // 2024 is a leap year.
console.log(isLeapYear(2023)); // 2023 is not a leap year.
