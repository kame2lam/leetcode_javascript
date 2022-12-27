// 7. Reverse Integer
// Example 1:
// Input: x = 123
// Output: 321
// Example 2:
// Input: x = -123
// Output: -321
// Example 3:
// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  if (x > 2147483647 && x < -2147483648) { return 0 }
  let abs = Math.abs(x),
    plus = x > 0 ? 1 : -1,
    len = abs.toString().length,
    temp = abs,
    ret = 0
  for (let i = 0; i < len; i++) {
    ret += (temp % 10) * (10 ** (len - i - 1))
    temp = parseInt(temp / 10)
  }
  return ret * plus
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))