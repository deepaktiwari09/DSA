type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let ini = init;
  for (let i = 0; i < nums.length; i++) {
    ini = fn(ini, nums[i]);
  }
  return ini;
}

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
);
console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr * curr;
    },
    100
  )
);
console.log(
  reduce(
    [],
    function sum(accum, curr) {
      return 0;
    },
    25
  )
);
