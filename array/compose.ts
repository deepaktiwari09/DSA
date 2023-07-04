type F = (x: number) => number;

export function compose(functions: F[]): F {
    
	return function(x) {
        for (let i = 0; i < functions.length; i++) {
            x = functions[functions.length - (i+1)](x)
        }
        return x
    }
};


const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4)) //65

const fn1 = compose([x => 10 * x, x => 10 * x, x => 10 * x])
console.log(fn1(1)) //6

const fn2 = compose([])
console.log(fn2(42)) //6
