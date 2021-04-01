import {OwnGameState, OwnGameActionTypes, OwnGameAction} from '../../types/own-game-types';

const initialState: OwnGameState = {
    currentSentence: "Человек не должен водить машину после того, как он выпил алкоголь",
    arrayOfTaskBlocks: ["Человек", "не", "должен", "водить", "машину", "после", "того", "как", 
"он", "выпил", "алкоголь"],
    arrayOfAnswerBlocks: []
  };

export const ownGameReducer = (state: OwnGameState = initialState, action: OwnGameAction) => {
    switch (action.type) {
        case OwnGameActionTypes.SET_CURRENT_SENTENCE: {
          return {
            ...state,
            currentSentence: action.payload,
          };
        }
        case OwnGameActionTypes.SET_ARRAY_OF_TASK_BLOCKS: {
            return {
              ...state,
              arrayOfTaskBlocks: action.payload,
            };
          }
        default: {
            return {
              ...state,
            };
          }
    }
};