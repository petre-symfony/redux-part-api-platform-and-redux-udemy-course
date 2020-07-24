import {
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR
} from "./types";
import requests from '../agent';

export const blogPostsListFetch = () => (dispatch) => {
  requests.get('/blog_posts')
    .then(response => dispatch({type: BLOG_POST_LIST_RECEIVED, payload: response}))
    .catch(error => dispatch({type: BLOG_POST_LIST_ERROR, payload: error}))
  ;
}

export const blogPostListError = (error) => ({
  type: BLOG_POST_LIST_ERROR,
  payload: error
})

export const blogPostListReceived = (data) => ({
  type: BLOG_POST_LIST_RECEIVED,
  payload: data
});
