async function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  return Promise.all([promise1, promise2]).then((result) => {
    let init = 0;
    for (let i = 0; i < result.length; i++) {
      init = init + result[i];
    }
    return init;
  });
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then((a) =>
  console.log(a)
); // 4

addTwoPromises(Promise.resolve(10), Promise.resolve(-12)).then((a) =>
  console.log(a)
); // 4
