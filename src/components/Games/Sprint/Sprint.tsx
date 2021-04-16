import React, { useState } from 'react';
import { Rules } from './Rules';
import { SprintGame } from './Sprint-game';
import { useTypedSelector } from '../../../hooks';
import { ChooseLvl } from '../../ChooseLvl';
import style from './Sprint.module.scss';

export const Sprint: React.FC = () => {
  const [rulesCls, setRulesCls] = useState('open');
  const [startGame, setStartGame] = useState(false);

  const clickStart = () => {
    setStartGame(true);
    setRulesCls('close');
  };

  const { isMainPage } = useTypedSelector((state) => state.gameState);
  if (isMainPage) {
    return <ChooseLvl background="sprint.jpg" />;
  }

  if (rulesCls === 'close') {
    return (
      <SprintGame
        startGame={startGame}
        setStartGame={setStartGame}
        setRulesCls={setRulesCls}
      />
    );
  }

  return (
    <div className={style.wrapper}>
      <Rules clickStart={clickStart} rulesCls={rulesCls} />
    </div>
  );
};
