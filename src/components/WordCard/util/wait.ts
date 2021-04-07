const wait = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve('DONE');
    }, ms * 1000)
  );

export { wait };
