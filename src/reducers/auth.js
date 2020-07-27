import {
  USER_LOGIN_SUCCESS,
  USER_PROFILE_RECEIVED,
  USER_SET_ID,
  USER_LOGOUT
} from '../actions/types';

export default (state= {
  token: null,
  userId: null,
  userData: null,
  isAuthenticated: false
}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isAuthenticated: true
      }
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false,
        userData: null
      }
    case USER_SET_ID:
      return {
        ...state,
        userId: action.userId
      }
    case USER_PROFILE_RECEIVED:
      return {
        ...state,
        userId: action.userId,
        userData:
          state.userId === action.userId && state.userData === null
          ? action.userData : null,
        isAuthenticated:
          state.userId === action.userId && state.userData === null
      }
    default:
      return state
  }
}