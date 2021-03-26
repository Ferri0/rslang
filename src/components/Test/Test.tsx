import React from 'react';
import { useActions, useTypedSelector } from '../../hooks';

export const Test = (): JSX.Element => {
  const { value } = useTypedSelector((state) => state.test);
  const { increment, decrement, reset } = useActions();
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
