import { combineReducers } from "redux";
import blogPostList from "./blogPostListReducer";
import blogPost from "./blogPostReducer";
import commentList from './commentListReducer';
import auth from './auth';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  blogPostList,
  blogPost,
  commentList,
  form: formReducer,
  auth
})