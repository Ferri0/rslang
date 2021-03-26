import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers';

const stringMiddleWare = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(stringMiddleWare));

export { store };
