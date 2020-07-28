import {
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_SET_PAGE
} from "../actions/types";
import { hydraPageCount } from "../apiUtils";

export default (state = {
  posts:null,
  isFetching: true,
  currentPage: 1,
  pageCount: null
}, action) => {
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
        pageCount: hydraPageCount(action.payload),
        isFetching: false
      };
      return state;
    case BLOG_POST_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        posts: null
      }
    case BLOG_POST_LIST_SET_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state;
  }
}