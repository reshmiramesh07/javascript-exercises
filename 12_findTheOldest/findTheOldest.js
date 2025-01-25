const findTheOldest = function (people) {
  const ageSort = people.sort(function (a, b) {
    for (var i = 0; i < people.length; i++) {
      if (people[i].yearOfDeath == undefined) {
        people[i].yearOfDeath = new Date().getFullYear();
      }
    }
    if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
      return -1;
    } else {
      return 1;
    }
  });
  return ageSort[ageSort.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
