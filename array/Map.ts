function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let returnArr = [] as number[]
    for (let i = 0; i < arr.length; i++) {
        returnArr.push(fn(arr[i],i))
    }
   return returnArr
};

console.log(map([1,2,3],function plusone(n) { return n + 1; }))
console.log(map([1,2,3],function plusI(n, i) { return n + i; }))
console.log(map([1,2,3],function constant(n, i) { return 42; }))