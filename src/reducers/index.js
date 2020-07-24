import { combineReducers } from "redux";
import blogPostList from "./blogPostListReducer";
import blogPost from "./blogPostReducer";

export default combineReducers({
  blogPostList,
  blogPost
})