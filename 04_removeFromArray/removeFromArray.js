const removeFromArray = function (array, ...removeArgs) {
  let result = array;
  for (const arg of removeArgs) {
    // if (arg in array == false) {
    //   continue;
    // }
    while (result.indexOf(arg) != -1) {
      removeAtIndex = result.indexOf(arg);
      result.splice(removeAtIndex, 1);
    }
  }
  return result;

  // remove multiple of the same value:
  // loop until that value isn't found in the array anymore?
};

// Do not edit below this line
module.exports = removeFromArray;
