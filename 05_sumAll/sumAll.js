const sumAll = function (start, end) {
  // loop from start to end integer, += to the sum
  let sum = 0;
  if (
    start < 0 ||
    end < 0 ||
    Number.isInteger(start) == false ||
    Number.isInteger(end) == false ||
    typeof start != "number" ||
    typeof end != "number"
  ) {
    return "ERROR";
  } else if (start < end) {
    for (var i = start; i <= end; i++) {
      sum += i;
    }
  } else {
    // test 3 tests the case of start > end
    for (var i = start; i >= end; i--) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
