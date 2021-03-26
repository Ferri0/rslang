import React, { useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import style from './Header-auth-block.module.scss';

const authorizeText = {
  ru: 'Авторизация',
  en: 'Authorize',
  ua: 'Авторизація',
};

const exitText = {
  ru: 'Выйти',
  en: 'Log out',
  ua: 'Вийти',
};

const welcomeText = {
  ru: 'Добро пожаловать',
  en: 'Welcome',
  ua: 'Вітаємо',
};

export function HeaderAuthBlock() {
  const {
    setShowAuth,
    setAuthorized,
    setCurrentUser,
    setShowRegister,
  } = useAction();
  const { isAuthorized, currentUser } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('yaia-team-rslang-current-user')) {
      setCurrentUser(localStorage.getItem('yaia-team-rslang-current-user'));
    }
    if (localStorage.getItem('yaia-team-rslang-isAuth')) {
      setAuthorized(
        JSON.parse(localStorage.getItem('yaia-team-rslang-isAuth'))
      );
    }
  });

  if (isAuthorized === false) {
    return (
      <div className={style.headerAuthBlockWrapper}>
        <button
          type="button"
          className={style.headerAuthBlockButton}
          onClick={() => setShowAuth(true)}
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
          localStorage.setItem('yaia-team-rslang-current-user', null);
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
