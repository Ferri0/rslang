import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home-button.module.scss';

export const HomeButton: React.FC = () => (
  <Link className={[style.btn, style.btn_home].join(' ')} to="/dashboard" />
);
