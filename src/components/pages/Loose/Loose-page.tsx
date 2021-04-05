import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import style from './Loose-page.module.scss';

export function LoosePage() {
  const { isLoose } = useTypedSelector((state) => state.gameStatus);
  const { setLoose, setHealthPoints } = useAction();
  return (
    <div
      className={
        isLoose ? style.loosePageWrapper : style.loosePageWrapperHidden
      }
    >
      <div className={style.loosePageContainer}>
        <div className={style.loosePageHeader}></div>
        Вы проиграли
        <Link
          className={style.btn}
          to="/dashboard"
          onClick={() => {
            setLoose(false);
            setHealthPoints([1, 1, 1, 1, 1]);
          }}
        >
          Закрыть
        </Link>
      </div>
    </div>
  );
}
