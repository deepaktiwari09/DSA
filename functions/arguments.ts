function argumentsLength(...args: any[]): number {
    return args.length
};

console.log(argumentsLength(5)) //1
console.log(argumentsLength({},null,"3")) //3