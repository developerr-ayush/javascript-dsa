var searchMatrix = function (matrix, target) {
  for (let index = 0; index < matrix.length; index++) {
    for (let j = 0; j < matrix[index].length; j++) {
      if (matrix[index][j] === target) {
        return true;
      }
    }
  }
  return false;
};
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
