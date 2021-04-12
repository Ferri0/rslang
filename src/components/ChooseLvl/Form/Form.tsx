import React from 'react';
import style from './Form.module.scss';

type Setter = {
  handleSubmit: (handleSubmit: React.FormEvent<HTMLFormElement>) => void;
  group: number;
  setGroup: (group: number) => void;
};

export const Form = ({
  setGroup,
  group,
  handleSubmit,
}: Setter): JSX.Element => (
  <form onSubmit={handleSubmit}>
    {[0, 1, 2, 3, 4, 5].map((num) => (
      <label key={num} className={style.container} htmlFor={`level${num}`}>
        Уровень {+num + 1}
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
    <input type="submit" value="OK" />
  </form>
);
