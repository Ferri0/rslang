export const shuffleArray = (arr: string[]): Array<string> => {
  const copyArr = arr.slice();
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const randIndex = Math.floor(Math.random() * copyArr.length);
    const newItem = copyArr[randIndex];
    result.push(newItem);
    copyArr.splice(randIndex, 1);
  }
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const wait = (ms: number): any =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve('DONE');
    }, ms * 1000)
  );
