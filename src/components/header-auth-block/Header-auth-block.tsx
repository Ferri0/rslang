import React, { useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import style from './Header-auth-block.module.scss';

export function HeaderAuthBlock() {
  const {
    setShowLogin,
    setAuthorized,
    setCurrentUser,
    setShowRegister,
  } = useAction();
  const { isAuthorized, currentUser } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('yaia-team-rslang-current-user')) {
      setCurrentUser(
        JSON.parse(localStorage.getItem('yaia-team-rslang-current-user'))
      );
    }
    if (localStorage.getItem('yaia-team-rslang-isAuth')) {
      setAuthorized(
        JSON.parse(localStorage.getItem('yaia-team-rslang-isAuth'))
      );
    }
  }, [currentUser]);

  if (isAuthorized === false) {
    return (
      <div className={style.headerAuthBlockWrapper}>
        <button
          type="button"
          className={style.headerAuthBlockButton}
          onClick={() => setShowLogin(true)}
        >
          Войти
        </button>
        <button
          type="button"
          className={style.headerAuthBlockButton}
          onClick={() => setShowRegister(true)}
        >
          Зарегистрироваться
        </button>
      </div>
    );
  }
  return (
    <div className={style.headerAuthBlockWrapper}>
      <span
        className={style.headerAuthBlockText}
      >{`Добро пожаловать, ${currentUser}`}</span>
      <button
        type="button"
        className={style.headerAuthBlockButton}
        onClick={() => {
          localStorage.setItem(
            'yaia-team-rslang-current-user',
            JSON.stringify(null)
          );
          localStorage.setItem(
            'yaia-team-rslang-isAuth',
            JSON.stringify(false)
          );
          setAuthorized(false);
          setCurrentUser(null);
        }}
      >
        Выйти
      </button>
    </div>
  );
}
