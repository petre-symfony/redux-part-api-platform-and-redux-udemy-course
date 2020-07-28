import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_UNLOAD,
  COMMENT_ADD
} from "../actions/types";
import { hydraPageCount } from '../apiUtils';

export default (state = {
  comments:null,
  isFetching: true,
  currentPage: 1,
  pageCount: null
}, action) => {
  switch(action.type){
    case COMMENT_LIST_REQUEST:
      state = {
        ...state,
        isFetching: true
      };
      return state;
    case COMMENT_ADD:
      return {
        ...state,
        comments: [action.comment, ...state.comments]
      }
    case COMMENT_LIST_RECEIVED:
      state =  {
        ...state,
        comments: !state.comments ? action.payload['hydra:member'] :
          state.comments.concat(action.payload['hydra:member']),
        isFetching: false,
        currentPage: state.currentPage + 1,
        pageCount: hydraPageCount(action.payload)
      };
      return state;
    case COMMENT_LIST_ERROR:
    case COMMENT_LIST_UNLOAD:
      return {
        ...state,
        isFetching: false,
        comments: null,
        currentPage: 1,
        pageCount: null
      }
    default:
      return state;
  }
}