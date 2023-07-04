// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// function threeSum(nums: number[]): number[][] {
//   let start = 0
//   let end = nums.length -1
//   let target = 6
  
//   while (start <= end){
//     let mid = Math.floor((start + end)/2)
//     let val = nums[mid]
    
//     if( val===target){
//        return mid
//     }
//     else if(val<target){
//       start = mid +1
    
//     }else{
//       end = mid -1
//     }
//   }
//   return -1
  
// }

const sort = (array:number[])=>{
  return array.sort((a,b)=> {
    a
    b
    let c =  a-b
    c
    return c
  })
}

console.log(sort([2,3,1]))
// console.log(threeSum([0,0,0]))
// console.log(threeSum([0,1,1]))