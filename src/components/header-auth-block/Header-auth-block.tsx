import React, { useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import style from './Header-auth-block.module.scss';

interface Props {
  parent: string;
}

export const HeaderAuthBlock: React.FC<Props> = ({ parent }) => {
  const {
    setShowLogin,
    setAuthorized,
    setCurrentUser,
    setCurrentUserID,
    setShowRegister,
    setToken,
    setRefreshToken,
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
    if (localStorage.getItem('yaia-team-rslang-userID')) {
      setCurrentUserID(
        JSON.parse(localStorage.getItem('yaia-team-rslang-userID'))
      );
    }
    if (localStorage.getItem('yaia-team-rslang-token')) {
      setToken(JSON.parse(localStorage.getItem('yaia-team-rslang-token')));
    }
    if (localStorage.getItem('yaia-team-rslang-refresh-token')) {
      setRefreshToken(
        JSON.parse(localStorage.getItem('yaia-team-rslang-refresh-token'))
      );
    }
  }, [currentUser]);

  if (isAuthorized === false) {
    return (
      <div className={`${style[parent]} ${style.headerAuthBlockWrapper}`}>
        <button
          type="button"
          className={`${style.headerAuthBlockButton} ${style.headerAuthBlockLoginButton}`}
          onClick={() => setShowLogin(true)}
        >
          Войти
        </button>
        <button
          type="button"
          className={style.headerAuthBlockButton}
          onClick={() => setShowRegister(true)}
        >
          Регистрация
        </button>
      </div>
    );
  }
  return (
    <div className={`${style[parent]} ${style.headerAuthBlockWrapper}`}>
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
          localStorage.setItem('yaia-team-rslang-userID', JSON.stringify(null));
          localStorage.setItem('yaia-team-rslang-token', JSON.stringify(null));
          localStorage.setItem(
            'yaia-team-rslang-refresh-token',
            JSON.stringify(null)
          );
          setAuthorized(false);
          setCurrentUser(null);
        }}
      >
        Выйти
      </button>
    </div>
  );
};
