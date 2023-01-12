// 13. Roman to Integer

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range[1, 3999].

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
  let len = s.length
  let ret = 0
  for (let i = 0; i < len; i++) {
    let addN = roman[s[i - 1]] < roman[s[i]] ? roman[s[i]] - 2 * roman[s[i - 1]] : roman[s[i]]
    ret += addN
  }
  return ret
};

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))