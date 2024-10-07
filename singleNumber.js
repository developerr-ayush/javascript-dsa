var singleNumber = function (nums) {
  return nums.reduce((acc, x) => acc ^ x, 0);
};
singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);
