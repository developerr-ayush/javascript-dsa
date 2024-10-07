var maxSubArray = function (arr) {
  let currSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum < 0) {
      currSum = 0;
    }
    maxSum = Math.max(currSum, maxSum);
  }

  if (maxSum === 0) {
    let min = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min) {
        min = arr[i];
      }
    }
    return min;
  } else {
    return maxSum;
  }
};
