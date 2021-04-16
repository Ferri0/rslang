import React, { useState } from 'react';
import { register } from '../../../service';
import { Spinner } from '../../Spinner';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useAction } from '../../../hooks/useAction';
import style from './Registration-page.module.scss';

export function RegistrationPage(): JSX.Element {
  const { setShowRegister, setLoading } = useAction();
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
      setErrorText('');
      setLoading(true);
      register(username, email, password).then((res) => {
        setLoading(false);
        const error = res.statusText;
        if (error === 'Unprocessable Entity') {
          setErrorText('Некорректный адрес электронной почты или пароль');
        }
        if (error === 'Expectation Failed') {
          setErrorText('Такой пользователь существует');
        }
        if (res.ok) {
          setErrorText('Пользователь успешно зарегистрирован');
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
          Введите имя пользователя, адрес электронной почты и пароль(не менее
          8-ми символов)
        </span>
        {spinnerDiv}
        <span className={style.registrationPageError}>{errorText}</span>
        <div className={style.registrationPageInputContainer}>
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
