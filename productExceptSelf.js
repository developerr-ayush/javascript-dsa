var productExceptSelf = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      ans[i] *= nums[j];
    }
  }
  return ans;
};
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
