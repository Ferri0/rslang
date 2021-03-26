import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setShowAuth,
  setAuthorized,
  setCurrentUser,
} from '../../../store/actions';
import { register } from '../../../service';
import style from './registration-page.module.scss';

function RegistrationPage(props) {
  const {
    isShowAuth,
    setShowAuthAction,
    setAuthorizedAction,
    setCurrentUserAction,
  } = props;
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
        if (res === 'ok') {
          setErrorText('');
          setCurrentUserAction(username);
          // localStorage.setItem('travel-app-current-user', user);
          // localStorage.setItem('travel-app-isAuth', true);
          setAuthorizedAction(true);
          setShowAuthAction(false);
        }
        setErrorText('Некорректные данные');
      });
    } else {
      setErrorText('Введённые пароли не совпадают');
    }
  }

  return (
    <div
      className={
        isShowAuth
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
            registerHandler(username, email, password, repeatPassword);
          }}
        >
          Зарегистрироваться
        </button>
        <button
          type="button"
          className={`${style.registrationPageButton} ${style.closeButton}`}
          onClick={() => setShowAuthAction(false)}
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ isShowAuth, isAuthorized, currentUser }) => ({
  isShowAuth,
  isAuthorized,
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
  setAuthorizedAction: (value) => dispatch(setAuthorized(value)),
  setCurrentUserAction: (value) => dispatch(setCurrentUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);

RegistrationPage.propTypes = {
  setShowAuthAction: PropTypes.func.isRequired,
  isShowAuth: PropTypes.bool.isRequired,
  setAuthorizedAction: PropTypes.func.isRequired,
  setCurrentUserAction: PropTypes.func.isRequired,
};
