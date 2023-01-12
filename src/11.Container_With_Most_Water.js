//11. Container With Most Water
//Input: height = [1,8,6,2,5,4,8,3,7]
//Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
 let len=height.length,
   maxS=0
 for(let i=1;i<len;i++){
  for(let j=0;j<i;j++){
   l=height[i]<height[j]? height[i]: height[j]
   let S=l*(i-j)
   maxS=maxS>S? maxS: S 
  }
 }
 return maxS
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
