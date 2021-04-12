import React, { useEffect, useState } from 'react';
import style from './Timer.module.scss';

interface ITimer {
  setEndGame?: (value: boolean) => void;
  startGame: boolean;
}

export const Timer: React.FC<ITimer> = ({ setEndGame, startGame }) => {
  const [seconds, setSeconds] = useState(60);
  const [val, setVal] = useState(0);
  const [color, setColor] = useState('#297ab9');

  useEffect(() => {
    if (startGame) {
      if (seconds > 0) {
        const id: number = window.setTimeout(() => {
          setSeconds(seconds - 1);
          clearTimeout(id);
        }, 1000);
      } else {
        setEndGame(true);
      }
    }
  }, [seconds, setEndGame, startGame]);

  const radius = 45;
  const circleLength = 2 * Math.PI * radius;

  useEffect(() => {
    setVal(circleLength - seconds * (circleLength / 60));
    if (seconds === 10) setColor('#d00202');
  }, [circleLength, seconds]);

  return (
    <div className={style.timer}>
      <svg
        className={style.timer_svg}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={style.timer_circle}>
          <circle className={style.timer_path} cx="50" cy="50" r={radius} />
          <path
            id="base-timer-path-remaining"
            strokeDasharray={circleLength}
            className={style.timer_path_remaining}
            style={{
              strokeDasharray: `${val} ${circleLength}`,
              stroke: `${color}`,
            }}
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          />
        </g>
      </svg>
      <div className={style.timer_time}>{seconds}</div>
    </div>
  );
};
