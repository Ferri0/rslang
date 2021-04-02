const wait = (ms: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('DONE');
    }, ms * 1000)
  );
};

export { wait };
