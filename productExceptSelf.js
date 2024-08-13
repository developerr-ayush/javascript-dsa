var productExceptSelf = function (nums) {
  let n = nums.length;
  let prefix = Array(n).fill(1);
  let suffix = Array(n).fill(1);
  let ans = [];
  for (let i = 1; i < n; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = nums[i + 1] * suffix[i + 1];
  }
  console.log("prefix", prefix);
  console.log("suffix", suffix);
  for (let i = 0; i < n; i++) {
    ans[i] = prefix[i] * suffix[i];
  }
  return ans;
};
console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// -1 1 0 -3 3
// 0 0 0 3 9
