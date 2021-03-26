import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

// const stringMiddleWare = () => (next) => (action) => {
//   if (typeof action === 'string') {
//     return next({
//       type: action,
//     });
//   }

//   return next(action);
// };

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
