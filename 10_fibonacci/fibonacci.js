const fibonacci = function (nth) {
  // "nth number returns x in the sequence"
  // 1 1 2 3 5 8
  // 1 2 3 4 5 6
  // 0 1 2 3 4 5
  let next = 1;
  let current = 1;
  let previous = 0;
  if (nth == 0) {
    return previous;
  } else if (Number(nth) < 0) {
    return "OOPS";
  }
  for (var i = 1; i < Number(nth); i++) {
    current = next;
    next = current + previous;
    previous = current;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
