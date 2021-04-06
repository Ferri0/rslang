const wait = (ms: number): Promise<unknown> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve('DONE');
    }, ms * 1000)
  );

export { wait };
