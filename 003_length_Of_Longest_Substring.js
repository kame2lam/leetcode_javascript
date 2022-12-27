const lengthOfLongestSubstring=(s)=>{
 const strlen=s.length
 let start=0
 let strdict={}
 let max=0
 for(let i=0;i<strlen;i++){
  const e=s[i]
  if(strdict[e]!=undefined&&strdict[e]>=start){
   start=strdict[e]+1
  }else{
   const curlen=i-start+1
   max=Math.max(curlen,max)
  }
  strdict[e]=i
 }
 return max
}

const str='ellldell'
console.log(lengthOfLongestSubstring(str))
