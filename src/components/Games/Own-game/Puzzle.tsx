import React, { useState } from 'react';
import { useTypedSelector } from '../../../hooks';
import { ChooseLvl } from '../../ChooseLvl';
import { Rules } from './Rules';
import { OwnGame } from './Puzzle-game/Own-game';
import style from './Puzzle.module.scss';

export const Puzzle = (): JSX.Element => {
  const [rulesCls, setRulesCls] = useState('open');
  const { isMainPage } = useTypedSelector((state) => state.gameState);

  const clickStart = () => {
    setRulesCls('close');
  };

  if (isMainPage) {
    return <ChooseLvl background="puzzle.jpg" />;
  }

  if (rulesCls === 'close') {
    return <OwnGame />;
  }

  return (
    <div className={style.wrapper}>
      <Rules clickStart={clickStart} cls={rulesCls} />
    </div>
  );
};
