import React from 'react';
import style from './Form.module.scss';

type Setter = {
  setOpen: (setOpen: boolean) => void;
  handleSubmit: (handleSubmit: React.FormEvent<HTMLFormElement>) => void;
  group: string;
  setGroup: (group: string) => void;
};

export const Form = ({ setOpen, setGroup, group, handleSubmit }: Setter) => (
  <form onSubmit={handleSubmit}>
    {['0', '1', '2', '3', '4', '5'].map((num) => (
      <label key={num} className={style.container} htmlFor={`level${num}`}>
        Group {+num + 1}
        <input
          type="radio"
          id={`level${num}`}
          value={num}
          checked={group === num}
          onChange={() => setGroup(num)}
        />
        <span className={style.checkmark} />
      </label>
    ))}
    <input type="submit" value="OK" onClick={() => setOpen(false)} />
  </form>
);
