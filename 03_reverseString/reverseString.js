const reverseString = function (string) {
  let result = "";
  for (var i = string.length; i > -1; i--) {
    result += string.charAt(i);
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
