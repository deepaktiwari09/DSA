
type Fn = (...args: any[]) => any

function once(fn) {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
}

const fn = (a, b, c) => a + b + c;
const calls = [[1, 2, 3], [2, 3, 6]];

const onceFn = once(fn);
console.log(onceFn(...calls[0])); // 6
console.log(onceFn(...calls[1])); 
