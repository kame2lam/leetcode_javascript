// 9. Palindrome Number
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  let temp = x,
    pali = 0
  if (x < 0) { return false }
  for (; temp > 0;) {
    pali = pali * 10
    pali += temp % 10
    temp = parseInt(temp / 10)
  }
  if (x == pali) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome(-121))