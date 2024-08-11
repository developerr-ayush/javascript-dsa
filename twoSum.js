var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    let ans = nums.indexOf(complement, i + 1);
    if (ans > 0) {
      return [i, ans];
    }
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum([1, 2, 4, 15], 6));
console.log(twoSum([3, 3], 6));
