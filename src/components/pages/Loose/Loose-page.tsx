import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import style from './Loose-page.module.scss';

export function LoosePage(): React.ReactElement {
  const { isLoose } = useTypedSelector((state) => state.gameStatus);
  const { setLoose, setAnswerCounter } = useAction();
  return (
    <div
      className={
        isLoose ? style.loosePageWrapper : style.loosePageWrapperHidden
      }
    >
      <div className={style.loosePageContainer}>
        <div className={style.loosePageHeader} />
        Вы проиграли
        <Link
          className={style.btn}
          to="/dashboard"
          onClick={() => {
            setAnswerCounter(0);
            setLoose(false);
          }}
        >
          Закрыть
        </Link>
      </div>
    </div>
  );
}
