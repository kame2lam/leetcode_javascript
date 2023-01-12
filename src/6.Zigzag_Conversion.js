// 6. Zigzag Conversion

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

let convert = function (s, numRows) {
  if (numRows == 1) { return s }
  let strlen = s.length
  let curRow = (numRows - 1) * 2
  let ret = []
  for (let j = 0; j < numRows; j++) {
    let temp = []
    for (let i = 0; i < strlen; i++) {
      if ((i - j) % curRow == 0 || (i + j) % curRow == 0) {
        temp.push(s[i])
      }
    }
    ret.push(temp)
  }
  console.log(ret)
  return ret.map(e => e.join('')).join('')
}

console.log(convert("PAYPALISHIRING", 4))