export let nums = [76, 43, 22, 2, -4, 7, 2, 0, 100];

export function sorting(array: number[]) {
  let copy = array;
  for (const iterator of copy) {
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > copy[i + 1]) {
        let iValue = copy[i];
        copy[i] = copy[i + 1];
        copy[i + 1] = iValue;
      }
    }
  }

  return copy;
}

console.log(sorting(nums));
