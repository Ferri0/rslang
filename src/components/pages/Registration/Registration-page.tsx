import React, { useState } from 'react';
import { register } from '../../../service';
import { Spinner } from '../../Spinner';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import style from './Registration-page.module.scss';

export function RegistrationPage() {
  const {
    setShowRegister,
    setAuthorized,
    setCurrentUser,
    setLoading,
  } = useAction();
  const { isShowRegister, loading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setrepeatPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  let spinnerDiv;
  if (loading) {
    spinnerDiv = <Spinner />;
  } else {
    spinnerDiv = '';
  }

  function registerHandler() {
    if (password === repeatPassword) {
      setLoading(true);
      register(username, email, password).then((res) => {
        setLoading(false);
        setErrorText('Некорректные данные');
        if (res === 'ok') {
          setErrorText('');
          setCurrentUser(username);
          localStorage.setItem(
            'yaia-team-rslang-current-user',
            JSON.stringify(username)
          );
          localStorage.setItem('yaia-team-rslang-isAuth', JSON.stringify(true));
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
        {spinnerDiv}
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
