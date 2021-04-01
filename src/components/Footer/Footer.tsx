import React from 'react';
import style from './Footer.module.scss';

export function Footer() {
  return (
    <div className={style.footer}>
      2021
      <a href="https://github.com/Ferri0" target="blank">
        Yaroslav Abrasimov
      </a>
      <a href="https://github.com/DenisOleksiuk" target="blank">
        Denis Oleksiuk
      </a>
      <a href="https://github.com/kattitova" target="blank">
        Kateryna Tytova
      </a>
      <a href="https://github.com/IgorAleks88" target="blank">
        Igor Alekseyenko
      </a>
      <a href="https://github.com/buiiz" target="blank">
        Ivan Tur
      </a>
      <a href="https://rs.school/react/" target="blank">
        <img alt="rsschool" src="../../assets/images/rs-logo.png" />
      </a>
    </div>
  );
}
