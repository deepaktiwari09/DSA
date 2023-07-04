function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    let returnVal = [] as number[]
    for (let i = 0; i < arr.length; i++) {
        let val = fn(arr[i],i)
        if(val){
            returnVal.push(arr[i])
        }
        
    }
    return returnVal
};

console.log(filter([0,10,20,30],function greaterThan10(n) { return n > 10; }))
console.log(filter([0,10,20,30],function firstIndex(n, i) { return i === 0; }))
console.log(filter([0,10,20,30],function plusOne(n) { return n + 1 }))