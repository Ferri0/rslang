import React, { useState } from 'react';
import { register } from '../../../service';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import style from './Registration-page.module.scss';

export function RegistrationPage() {
  const { setShowRegister, setAuthorized, setCurrentUser } = useAction();
  const { isShowRegister } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setrepeatPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  // const [errorType, setErrorType] = useState('ok');

  // function loginHandler(user, pass) {
  //   showplaceService.login(user, pass).then(res => {
  //     if (res === 'ok') {
  //       setCurrentUserAction(user);
  //       localStorage.setItem('travel-app-current-user', user);
  //       localStorage.setItem('travel-app-isAuth', true);
  //       setAuthorizedAction(true);
  //       setShowAuthAction(false)
  //     }
  //     setErrorType(res);
  //   });
  // }

  function registerHandler() {
    if (password === repeatPassword) {
      register(username, email, password).then((res) => {
        setErrorText('Некорректные данные');
        if (res === 'ok') {
          setErrorText('');
          setCurrentUser(username);
          // localStorage.setItem('travel-app-current-user', user);
          // localStorage.setItem('travel-app-isAuth', true);
          setAuthorized(true);
          setShowRegister(false);
        }
      });
    } else {
      setErrorText('Введённые пароли не совпадают');
    }
  }

  return (
    <div
      className={
        isShowRegister
          ? style.registrationPageWrapper
          : style.registrationPageWrapperHidden
      }
    >
      <div className={style.registrationPageContainer}>
        <span className={style.registrationPageHeader}>
          Введите имя пользователя и пароль
        </span>
        <span className={style.registrationPageError}>{errorText}</span>
        <div>
          <input
            className={style.registrationPageInput}
            placeholder="Имя"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className={style.registrationPageInput}
            placeholder="e-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            className={style.registrationPageInput}
            placeholder="Пароль"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            className={style.registrationPageInput}
            placeholder="Повторите пароль"
            onChange={(event) => setrepeatPassword(event.target.value)}
          />
        </div>
        <button
          type="button"
          className={style.registrationPageButton}
          onClick={() => {
            registerHandler();
          }}
        >
          Зарегистрироваться
        </button>
        <button
          type="button"
          className={`${style.registrationPageButton} ${style.closeButton}`}
          onClick={() => setShowRegister(false)}
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}
