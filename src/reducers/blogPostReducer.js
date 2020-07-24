import {
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR
} from "../actions/types";


export default (state = {posts:null, isFetching: true}, action) => {
  switch(action.type){
    case BLOG_POST_LIST_REQUEST:
      state = {
        ...state,
        isFetching: true
      };
      return state;
    case BLOG_POST_LIST_RECEIVED:
      state =  {
        ...state,
        posts: action.payload['hydra:member'],
        isFetching: false
      };
      return state;
    case BLOG_POST_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        posts: null
      }
    default:
      return state;
  }
}