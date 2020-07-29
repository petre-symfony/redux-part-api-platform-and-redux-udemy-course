import blogPostList from "./blogPostListReducer";
import blogPost from "./blogPostReducer";
import commentList from './commentListReducer';
import blogPostForm from './BlogPostFormReducer';
import auth from './auth';
import registration from './registrationReducer';
import {reducer as formReducer} from 'redux-form';
import { combineReducers } from "redux";
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  blogPostList,
  blogPost,
  blogPostForm,
  commentList,
  form: formReducer,
  router: routerReducer,
  auth,
  registration
})