var merge = function (nums1, m, nums2, n) {
  for (let j = 0, i = m; j < n; j++) {
    nums1[i] = nums2[j];
    i++;
  }
  return nums1.sort((a, b) => a - b);
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
