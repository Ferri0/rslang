import React, { useState } from 'react';
import { TCcomponent } from '../TCcomponent';
import s from './TestComponent.module.scss';

export const TestComponent = () => {
  const [greetings, setGreetings] = useState('hello world!');
  return (
    <div className={s.block}>
      {greetings}
      <button type="button" onClick={() => setGreetings('HELLO WORLD 2.0')}>
        Click Me!
      </button>
      <TCcomponent num={4 ** 4} />
    </div>
  );
};
