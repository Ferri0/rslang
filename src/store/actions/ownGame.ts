import {OwnGameActionTypes, OwnGameAction} from '../../types/own-game-types';

const setCurrentSentence = (value: string): OwnGameAction => ({
    type: OwnGameActionTypes.SET_CURRENT_SENTENCE,
    payload: value,
  });

  const setArrayOfAnswerBlock = (value: string[]): OwnGameAction => ({
    type: OwnGameActionTypes.SET_ARRAY_OF_ANSWER_BLOCKS,
    payload: value,
  });

  export {setCurrentSentence, setArrayOfAnswerBlock}