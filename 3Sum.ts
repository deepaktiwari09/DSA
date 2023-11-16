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

// const sort = (array:number[])=>{
//   return array.sort((a,b)=> {
//     a
//     b
//     let c =  a-b
//     c
//     return c
//   })
// }

// console.log(sort([2,3,1]))
// console.log(threeSum([0,0,0]))
// console.log(threeSum([0,1,1]))

// function threeSum(nums) {
//   const result = [];

//   //first step
//   nums.sort((a, b) => a - b);
//   console.log(nums);

//   for (let baseIndex = 0; baseIndex < nums.length - 2; baseIndex++) {
//     //base index will decide left and right index
//     //index value of base, left and right will be the answer
//     //while loop will start movement of leftIndex to rightIndex
//     if (
//       baseIndex === 0 ||
//       (baseIndex > 0 && nums[baseIndex] !== nums[baseIndex - 1])
//     ) {
//       let leftIndex = baseIndex + 1;
//       let rightIndex = nums.length - 1;
//       const target = 0 - nums[baseIndex];

//       while (leftIndex < rightIndex) {
//         const sum = nums[leftIndex] + nums[rightIndex]; //2

//         if (sum === target) {
//           result.push([nums[baseIndex], nums[leftIndex], nums[rightIndex]]);
//           while (
//             leftIndex < rightIndex &&
//             nums[leftIndex] === nums[leftIndex + 1]
//           )
//             leftIndex++;
//           while (
//             leftIndex < rightIndex &&
//             nums[rightIndex] === nums[rightIndex - 1]
//           )
//             rightIndex--;
//           leftIndex++;
//           rightIndex--;
//         } else if (sum < target) {
//           leftIndex++;
//         } else {
//           rightIndex--;
//         }
//       }
//     }
//   }

//   return result;
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// function test(array: number[], targetA: number) {
//   array.sort((a, b) => a - b);
//   console.log(array);
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     const target = 0 - array[i];
//     let left = i + 1;
//     let right = array.length - 1;
//     let sum = array[left] + array[right];
//     console.log(target, left, right);
//     if (sum - target == targetA) {
//       result.push([array[i], array[left], array[right]]);
//     }
//   }
//   return result;
// }

// console.log(test([1, 2, -1, -1, -2, 3, 1], 1));

//How you can hold multiple Index Pointers and move them to compute multiple computations combinations.
function closestThreeSum(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      const currentDiff = Math.abs(target - currentSum);
      console.log(
        `${currentDiff} < ${Math.abs(target - closestSum)}`,
        currentDiff < Math.abs(target - closestSum),
        currentSum
      );
      if (currentDiff < Math.abs(target - closestSum)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}

const nums = [-1, 3, -1, -4];
const target = 2;
console.log(closestThreeSum(nums, target));
