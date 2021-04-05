import * as UserActionCreators from './auth';
import * as OwnGameActionCreators from './ownGame';
import * as GameStatusActionCreators from './game-status';

export default {
  ...UserActionCreators,
  ...OwnGameActionCreators,
  ...GameStatusActionCreators,
};
