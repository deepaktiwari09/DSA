function createCounter(n: number): () => number {
    let heigh = false
    return function() {
        if(n == 6){
            heigh = true
        }else if(n == 0 ){
            heigh = false
        }
        if(heigh){
            n--
        }
        else{
            n++
        }
        return n
    }
}



const counter = createCounter(0)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) 
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) 
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) 
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) 
