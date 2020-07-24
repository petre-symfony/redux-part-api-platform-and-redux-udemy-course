import { combineReducers } from "redux";
import postsReducer from "./blogPostListReducer";
import blogPost from "./blogPostReducer";

export default combineReducers({
  posts: postsReducer,
  blogPost
})