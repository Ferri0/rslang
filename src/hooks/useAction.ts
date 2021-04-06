import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/actions';

export const useAction = (): typeof UserActionCreators => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};
