import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import style from './Win-page.module.scss';

export function WinPage(props: any) {
  const { isWin } = useTypedSelector((state) => state.gameStatus);
  const {
    setWin,
    setHealthPoints,
    setAnswerCounter,
    setArrayOfAnswerBlock,
  } = useAction();
  return (
    <div className={isWin ? style.winPageWrapper : style.winPageWrapperHidden}>
      <div className={style.winPageContainer}>
        <div className={style.winPageHeader} />
        Вы выиграли! Количество ошибок: {props.mistakesCounter}
        <Link
          className={style.btn}
          to="/dashboard"
          onClick={() => {
            setAnswerCounter(0);
            setWin(false);
          }}
        >
          Закрыть
        </Link>
      </div>
    </div>
  );
}
