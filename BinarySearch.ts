function binarySearch(arr: number[], target: number): number {
    let arrSort = arr.sort((a,b)=> a-b) 
    let start = 0
    let end = arrSort.length -1
  
    while (start<=end){
      let mid = Math.floor((start + end)/2)
      if(arr[mid] == target){
          return mid
      }else if(arr[mid] < target){
          start = mid +1
      }else{
          end = mid -1
      }
    }
    return -1
    
  }
  
  // Example usage
  const arr: number[] = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const target: number = 91;
  const result: number = binarySearch(arr, target);
  if (result !== -1) {
    console.log(`Element ${target} found at index ${result}.`);
  } else {
    console.log("Element not found.");
  }
  