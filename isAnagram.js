var isAnagram = function (s, t) {
  let x = s.split("").sort().join("");
  let y = t.split("").sort().join("");
  return x == y;
};
console.log(isAnagram("anagram", "nagaram"));
