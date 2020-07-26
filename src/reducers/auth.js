import {
  USER_LOGIN_SUCCESS,
  USER_PROFILE_RECEIVED
} from '../actions/types';

export default (state= {
  token: null,
  userId: null,
  isAuthenticated: false
}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log(state);
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isAuthenticated: true
      }
    default:
      return state
  }
}