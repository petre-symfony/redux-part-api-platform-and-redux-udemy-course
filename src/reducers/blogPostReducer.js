import {
  BLOG_POST_REQUEST,
  BLOG_POST_ERROR,
  BLOG_POST_RECEIVED
} from "../actions/types";

export default (state = {post:null, isFetching: true}, action) => {
  switch(action.type){
    case BLOG_POST_REQUEST:
      state = {
        ...state,
        isFetching: true
      };
      return state;
    case BLOG_POST_RECEIVED:
      state =  {
        ...state,
        post: action.payload,
        isFetching: false
      };
      return state;
    case BLOG_POST_ERROR:
      return {
        ...state,
        isFetching: false,
        post: null
      }
    default:
      return state;
  }
}