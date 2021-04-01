import React, { useState } from 'react';
import style from './Team-Slider.module.scss';
import { teamInfo } from './team-info';
import { arr, coord, angleH } from './const';

export function TeamSlider(): JSX.Element {
  const [cls, setCls] = useState(arr);
  const [angle, setAngle] = useState(0);

  const memberClick = (i: number) => {
    const newArr = arr.map((el, ind) => {
      if (ind === i) return 'active';
      return '';
    });
    setCls(newArr);
    setAngle(angleH * i);
  };

  return (
    <div className={style.sliderWrapper}>
      <div className={style.sliderRightBar}>
        <div
          className={style.circleSlider}
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className={style.circle} />

          {/* generate team members mini photo */}
          {teamInfo.map((member, i) => (
            <div
              key={`${member.id}-img`}
              className={`${style.miniPhoto} ${style[cls[i]]}`}
              style={{
                background: `url("${member.img}")`,
                top: `${coord[i].top}px`,
                right: `${coord[i].right}px`,
                transform: `rotate(${-angle}deg)`,
              }}
              onClick={() => memberClick(i)}
            />
          ))}
        </div>
        {/* generate team members main photo */}
        {teamInfo.map((member, i) => (
          <div
            key={`${member.id}-main-img`}
            className={`${style.photo} ${style[cls[i]]}`}
            style={{ background: `url("${member.img}")` }}
          />
        ))}

        {/* generate team members name */}
        {teamInfo.map((member, i) => (
          <div
            key={`${member.id}-name`}
            className={`${style.name} ${style[cls[i]]}`}
          >
            {member.title}
          </div>
        ))}
      </div>
      <div className={style.sliderInfo}>
        {/* generate team members status, desc */}
        {teamInfo.map((member, i) => (
          <div className={`${style.infoBlock} ${style[cls[i]]}`}>
            <div className={style.infoFirstLine}>
              <a href={member.url} target="blank" className={style.url}>
                <i className="fab fa-github" />
              </a>
              <span key={`${member.id}-info-name`} className={style.infoName}>
                {member.title}
              </span>
            </div>

            <span key={`${member.id}-status`} className={style.status}>
              {member.status}
            </span>

            <span key={`${member.id}-desc`} className={style.desc}>
              {member.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
