const palindromes = function (string) {
  const strArr = string.toLowerCase().split("");
  let forwards = "";
  let backwards = "";
  // remove spaces and any punctuation
  for (var i = 0; i < strArr.length; i++) {
    if (
      strArr[i] == " " ||
      strArr[i] == "," ||
      strArr[i] == "." ||
      strArr[i] == "!"
    ) {
      continue;
    } else {
      forwards += strArr[i];
    }
  }
  console.log(forwards);
  for (var i = forwards.length - 1; i > -1; i--) {
    backwards += forwards[i];
  }
  console.log(backwards);
  if (forwards == backwards) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
