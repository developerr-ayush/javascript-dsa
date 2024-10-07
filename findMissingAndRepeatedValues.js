var findMissingAndRepeatedValues = function (grid) {
  let arr = grid.flat();
  let repeated = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      repeated = arr[i];
      break;
    }
  }
  let missing = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      missing = i;
      break;
    }
  }
  return [repeated, missing];
};
findMissingAndRepeatedValues([
  [1, 3],
  [2, 2],
]);

findMissingAndRepeatedValues([
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
]);
