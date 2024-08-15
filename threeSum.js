/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 < p2) {
      let res = nums[i] + nums[p1] + nums[p2];
      if (res === 0) {
        ans.push([nums[i], nums[p1], nums[p2]]);
        while (p1 < p2 && nums[p1] === nums[p1 + 1]) p1++;
        while (p1 < p2 && nums[p2] === nums[p2 - 1]) p2--;
        p1++;
        p2--;
      } else if (res > 0) {
        p2--;
      } else {
        p1++;
      }
    }
  }
  return ans;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
// console.dir(
//   threeSum([
//     -13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14,
//     13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5,
//     -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8,
//     -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4,
//     2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11,
//     -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1,
//   ])
// );
