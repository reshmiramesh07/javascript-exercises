const leapYears = function (year) {
  // most common: div by 4
  // least common: div by 400; check this before div 100
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
