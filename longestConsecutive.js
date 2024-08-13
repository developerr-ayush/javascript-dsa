var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  nums = [...new Set(nums.sort((a, b) => a - b))];
  let max = 1;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 == nums[i + 1]) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 1;
    }
  }
  return max;
};
console.log(
  longestConsecutive([
    4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3,
  ])
);
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
