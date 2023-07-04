type ToBeOrNotToBe = {
    toBe: (val: any) => boolean
    notToBe: (val: any) => boolean
};

function expect(val: any): ToBeOrNotToBe {

    return {
        toBe:(val2:any)=>{
            if(val2 === val){
                return true
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe:(val3:any)=>{
            if(val3 !== val){
                return true
            }else{
                throw new Error("Equal");
            }
        }
    }
};


console.log(expect(6).toBe(5)); // true
console.log(expect(6).notToBe(5)) // throws "Equal"
 