var isPalindrome = function (s) {
  let regex = /[a-zA-Z\d+]/;
  s = s
    .split("")
    .map((s) => s.trim().toLowerCase())
    .filter((s) => regex.test(s))
    .join("");
  return s == s.split("").reverse().join("");
};
console.log(isPalindrome("race a car"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
