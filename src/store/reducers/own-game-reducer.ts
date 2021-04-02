import {OwnGameState, OwnGameActionTypes, OwnGameAction} from '../../types/own-game-types';

const initialState: OwnGameState = {
    currentSentence: "Человек не должен водить машину после того, как он выпил алкоголь",
    currentTaskSentence: "Человек не должен водить машину после того, как он выпил алкоголь",
    arrayOfTaskBlocks: ["Человек", "не", "должен", "водить", "машину", "после", "того", "как", 
"он", "выпил", "алкоголь"],
    arrayOfAnswerBlocks: [[]],
    answerCounter: 0
  };

export const ownGameReducer = (state: OwnGameState = initialState, action: OwnGameAction) => {
    switch (action.type) {
        case OwnGameActionTypes.SET_CURRENT_SENTENCE: {
          return {
            ...state,
            currentSentence: action.payload,
          };
        }
        case OwnGameActionTypes.SET_CURRENT_TASK_SENTENCE: {
          return {
            ...state,
            currentTaskSentence: action.payload,
          };
        }
        case OwnGameActionTypes.SET_ARRAY_OF_TASK_BLOCKS: {
            return {
              ...state,
              arrayOfTaskBlocks: action.payload,
            };
          }
        case OwnGameActionTypes.SET_ANSWER_COUNTER: {
            return {
              ...state,
              answerCounter: action.payload,
            };
          }
        default: {
            return {
              ...state,
            };
          }
    }
};