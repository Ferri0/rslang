import React, { useState } from 'react';
import s from './TestComponent.module.scss';

export default function TestComponent() {
  const [greetings, setGreetings] = useState('hello world!');
  return (
    <div className={s.block}>
      {greetings}
      <button type="button" onClick={() => setGreetings('HELLO WORLD 2.0')}>
        Click Me!
      </button>
    </div>
  );
}
