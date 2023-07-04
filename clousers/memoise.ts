type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    let cacheArgs = new Map()
    return function(...args) {
        let argsAsKey = `${args}`
        let value = cacheArgs.get(argsAsKey)
        if(value){
            return value
        }else{
            let result =fn(...args)
            cacheArgs.set(argsAsKey,result)
            return result
        }
    }
}

let callCountSum = 0;
const memoizedSum = memoize(function (a, b) {
    callCountSum += 1;
    return ({...a, ...b});
})


console.log(memoizedSum({}, {}))// 5
console.log(callCountSum)
console.log(memoizedSum({}, {}))// 5
console.log(callCountSum)
console.log(memoizedSum({}, {}))// 5
console.log(callCountSum)


