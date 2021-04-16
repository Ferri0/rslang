/* eslint-disable @typescript-eslint/no-explicit-any */
const wait = (ms: number): any =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve('DONE');
    }, ms * 1000)
  );

export { wait };
