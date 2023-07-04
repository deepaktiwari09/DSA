type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let og = init
    return {
        increment:()=>{
            og +=1
            return og
        },
        decrement:()=>{
            og -=1
            return og
        },
        reset:()=>{
            og = init
            return og
        }
    }
};


const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4
console.log(counter.increment()) 
console.log(counter.increment()) 
console.log(counter.increment()) 
console.log(counter.decrement()) 
console.log(counter.decrement()) 
console.log(counter.decrement()) 
 