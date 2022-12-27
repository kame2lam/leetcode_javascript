// 4. Median of Two Sorted Arrays
// Example 1:

// Input: nums1 = [1, 3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1, 2, 3] and median is 2.
// Example 2:

// Input: nums1 = [1, 2], nums2 = [3, 4]
// Output: 2.50000
// Explanation: merged array = [1, 2, 3, 4] and median is(2 + 3) / 2 = 2.5.

let findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2]
  arr.sort((a, b) => { return a - b })
  // console.log(arr)
  let len = Math.ceil(arr.length / 2)
  if (arr.length % 2 == 0) {
    return (arr[len - 1] + arr[len]) / 2
  } else {
    return arr[len - 1]
  }
}

function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

let findMedianSortedArrays2 = function (nums1, nums2) {
  let arr = [...nums1, ...nums2]
  arr = bubbleSort(arr)
  // console.log(arr)
  let len = Math.ceil(arr.length / 2)
  if (arr.length % 2 == 0) {
    return (arr[len - 1] + arr[len]) / 2
  } else {
    return arr[len - 1]
  }
}

let nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))
console.log(findMedianSortedArrays2(nums1, nums2))

// nums1 = [1, 3], nums2 = [2]
// console.log(findMedianSortedArrays(nums1, nums2))
// console.log(findMedianSortedArrays2(nums1, nums2))