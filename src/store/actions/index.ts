import * as UserActionCreators from './auth';
import * as OwnGameActionCreators from './ownGame'

export default {
    ...UserActionCreators,
    ...OwnGameActionCreators
}