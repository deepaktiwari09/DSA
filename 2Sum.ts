// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums: number[], target: number): number[] {
    let ts = []
    for(let i=0; i<nums.length; i++){
      let value = nums[i]
      let remain = nums.filter((n,ni)=> i != ni)
        
      for (let j=0; j<remain.length; j++){
        let sum = value + remain[j]
        sum
        if(sum == target){
            ts = [i,j+1]
            break
        }
      }
      if(ts.length>0){
        break
      }
    }
    return ts
  };

  console.log(twoSum([3,3],6))