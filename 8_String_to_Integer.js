// 8. String to Integer(atoi)
// Example 1:
// Input: s = "42"
// Output: 42
// Example 2:
// Input: s = "   -42"
// Output: -42
// Example 3:
// Input: s = "4193 with words"
// Output: 4193

/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = function (s) {
  let all = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'],
    len = s.length,
    temp = [],
    ret = 0,
    INT_MAX = 2147483647,
    INT_MIN = -2147483648
  for (let i = 0; i < len; i++) {
    if (all.includes(s[i])) {
      temp.push(s[i])
    }
  }
  ret = +temp.join('')
  if (ret > INT_MAX) {
    ret = INT_MAX
  }
  if (ret < INT_MIN) {
    ret = INT_MIN
  }
  return ret
}

console.log(myAtoi('-42 with words'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('2147483649 with words'))
console.log(myAtoi('-2147483649 with words'))