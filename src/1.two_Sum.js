// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let twoSum = function (nums, target) {
  let ret = null
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return ([i, j])
      }
    }
  }
}

let nums = [3, 2, 4],
  target = 6
console.log(twoSum(nums, target))