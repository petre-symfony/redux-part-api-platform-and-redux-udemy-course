import { combineReducers } from "redux";
import postsReducer from "./blogPostReducer";

export default combineReducers({
  posts: postsReducer
})