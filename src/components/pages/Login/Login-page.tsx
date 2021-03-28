import React, { useState } from 'react';
import { login } from '../../../service';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import style from './Login-page.module.scss';

export function LoginPage() {
  const { setShowLogin, setAuthorized, setCurrentUser } = useAction();
  const { isShowLogin } = useTypedSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  function loginHandler() {
    login(email, password).then((res: any) => {
      res.json().then((data: any) => {
        setErrorText('Некорректные данные');
        if (data.message === 'Authenticated') {
          setErrorText('');
          setCurrentUser(data.name);
          // localStorage.setItem('travel-app-current-user', user);
          // localStorage.setItem('travel-app-isAuth', true);
          setAuthorized(true);
          setShowLogin(false);
        }
      });
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
