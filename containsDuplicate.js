var containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};
var containsDuplicateWithoutSet = function (nums) {
  let arr = {};
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]]) {
      return true;
    } else {
      arr[nums[i]] = true;
    }
  }
  return false;
};

console.log(containsDuplicateWithoutSet([1, 2, 3, 4, 2, 3]));
console.log(containsDuplicateWithoutSet([1, 2, 3]));
console.log(containsDuplicateWithoutSet([1, 2, 3, 1, 3]));
console.log(containsDuplicateWithoutSet([7, 1, 4, 2, 4]));
