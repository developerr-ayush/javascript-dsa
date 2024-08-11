var topKFrequent = function (nums, k) {
  let map = new Map();
  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));
  let sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(sortedArr[i][0]);
  }
  return res;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([3, 0, 1, 0], 1));
console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 73, 73, 1], 1));
