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