import { combineReducers } from "redux";
import postsReducer from "./blogPostListReducer";
import postReducer from "./blogPostReducer";

export default combineReducers({
  posts: postsReducer,
  post: postReducer
})