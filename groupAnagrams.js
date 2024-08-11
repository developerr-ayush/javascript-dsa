var groupAnagrams = function (strs) {
  let map = new Map();
  let ans = [];
  for (let i = 0; i < strs.length; i++) {
    let sortedLetter = strs[i].split("").sort().join("");
    if (map.has(sortedLetter)) {
      map.get(sortedLetter).push(strs[i]);
    } else {
      map.set(sortedLetter, [strs[i]]);
    }
  }
  map.forEach((element) => ans.push(element));
  return ans;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["", ""]));
console.log(groupAnagrams(["a"]));
