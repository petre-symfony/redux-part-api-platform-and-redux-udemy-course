import {USER_LOGIN_SUCCESS} from '../actions/types';

export default (state= {token: null, userId: null}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        id: action.userId
      }
    default:
      return state
  }
}