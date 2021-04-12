import React from 'react';
import style from './Burger-icon.module.scss';

interface Props {
  clickBurgerMenu: React.MouseEventHandler<HTMLButtonElement>;
  cls: string;
}

const BurgerIcon: React.FC<Props> = ({ clickBurgerMenu, cls }) => (
  <button
    type="button"
    className={`${style.burgerIcon} ${style[cls]}`}
    onClick={clickBurgerMenu}
  >
    <span />
    <span />
    <span />
    <span />
  </button>
);

export { BurgerIcon };
