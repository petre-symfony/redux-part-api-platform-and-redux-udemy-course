import { combineReducers } from "redux";
import blogPostList from "./blogPostListReducer";
import blogPost from "./blogPostReducer";
import commentList from './commentListReducer';

export default combineReducers({
  blogPostList,
  blogPost,
  commentList
})