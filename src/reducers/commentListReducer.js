import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_UNLOAD
} from "../actions/types";

export default (state = {comments:null, isFetching: true}, action) => {
  switch(action.type){
    case COMMENT_LIST_REQUEST:
      state = {
        ...state,
        isFetching: true
      };
      return state;
    case COMMENT_LIST_RECEIVED:
      state =  {
        ...state,
        comments: action.payload,
        isFetching: false
      };
      return state;
    case COMMENT_LIST_ERROR:
    case COMMENT_LIST_UNLOAD:
      return {
        ...state,
        isFetching: false,
        comments: null
      }
    default:
      return state;
  }
}