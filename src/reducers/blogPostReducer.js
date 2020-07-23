import {BLOG_POST_LIST, BLOG_POST_LIST_ADD} from "../actions/types";


export default (state = [], action) => {
  switch(action.type){
    case BLOG_POST_LIST:
      return {
        ...state,
        posts: action.payload
      }
    case BLOG_POST_LIST_ADD:
      return {
        ...state,
        posts: state.posts ? state.posts.concat(action.payload) : state.posts
      }
    default:
      return state;
  }
}