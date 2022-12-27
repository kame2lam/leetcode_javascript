// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// A string is called a palindrome string if the reverse of that string is the same as the original string.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

let longestPalindrome = function (s) {
  let strlen = s.length,
    strdict = {},
    start = 0
  for (let i = 0; i < strlen; i++) {
    let e = s[i]
    if (strdict[e] != undefined && strdict[e] >= start) {
      let ret = ''
      for (let j = strdict[e]; j < i + 1; j++) {
        ret += s[j]
      }
      return ret
    } else {
      strdict[e] = i
    }
  }
}

let s = "babad"
console.log(longestPalindrome(s))
console.log(longestPalindrome('cbbd'))