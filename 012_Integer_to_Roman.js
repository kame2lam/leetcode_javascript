//12. Integer to Roman
//Input: num = 1994
//Output: "MCMXCIV"
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function(num) {
 let r=[['','I','II','III','IV','V','VI','VII','VIII','IX'],
  ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
  ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
  ['','M']]
 let ret=''
 let i=0
 for(;num>0;){
  ret=r[i][num%10]+ret
  i+=1
  num=(num-num%10)/10
 }
 
 return ret 
}

console.log(intToRoman(3))
console.log(intToRoman(1994))
