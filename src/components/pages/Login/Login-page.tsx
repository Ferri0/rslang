import React, { useState } from 'react';
import { Spinner } from '../../Spinner';
import { login } from '../../../service';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import style from './Login-page.module.scss';

export function LoginPage(): JSX.Element {
  const {
    setShowLogin,
    setAuthorized,
    setCurrentUser,
    setCurrentUserID,
    setToken,
    setRefreshToken,
    setLoading,
  } = useAction();
  const { isShowLogin, loading } = useTypedSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  let spinnerDiv;
  if (loading) {
    spinnerDiv = <Spinner />;
  } else {
    spinnerDiv = '';
  }

  function loginHandler() {
    setLoading(true);
    login(email, password).then((res) => {
      setLoading(false);
      const error = res.statusText;
      if (error === 'Not Found') {
        setErrorText('Пользователь не найден');
      }
      if (error === 'Forbidden') {
        setErrorText('Неправильный пароль');
      }
      if (res.ok) {
        res.json().then((data) => {
          if (data.message === 'Authenticated') {
            setErrorText('');
            setCurrentUser(data.name);
            localStorage.setItem(
              'yaia-team-rslang-current-user',
              JSON.stringify(data.name)
            );
            localStorage.setItem(
              'yaia-team-rslang-isAuth',
              JSON.stringify(true)
            );
            setAuthorized(true);
            setShowLogin(false);
            setCurrentUserID(data.userId);
            localStorage.setItem(
              'yaia-team-rslang-userID',
              JSON.stringify(data.userId)
            );
            setToken(data.token);
            localStorage.setItem(
              'yaia-team-rslang-token',
              JSON.stringify(data.token)
            );
            setRefreshToken(data.refreshToken);
            localStorage.setItem(
              'yaia-team-rslang-refresh-token',
              JSON.stringify(data.refreshToken)
            );
          }
        });
      }
    });
  }

  return (
    <div
      className={
        isShowLogin ? style.loginPageWrapper : style.loginPageWrapperHidden
      }
    >
      <div className={style.loginPageContainer}>
        <span className={style.loginPageHeader}>
          Введите адрес электронной почты и пароль
        </span>
        {spinnerDiv}
        <span className={style.loginPageError}>{errorText}</span>
        <div>
          <input
            className={style.loginPageInput}
            placeholder="e-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            className={style.loginPageInput}
            placeholder="Пароль"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="button"
          className={style.loginPageButton}
          onClick={() => {
            loginHandler();
          }}
        >
          Войти
        </button>
        <button
          type="button"
          className={`${style.loginPageButton} ${style.closeButton}`}
          onClick={() => setShowLogin(false)}
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}
