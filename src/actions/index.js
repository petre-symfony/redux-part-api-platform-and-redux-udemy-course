import {
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_RECEIVED,
  BLOG_POST_ERROR,
  BLOG_POST_UNLOAD,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_UNLOAD,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_ERROR,
  USER_PROFILE_RECEIVED
} from "./types";
import requests from '../agent';
import {SubmissionError} from 'redux-form';

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

export const blogPostFetch = (id) => (dispatch) => (
  requests.get(`/blog_posts/${id}`)
    .then(response => dispatch({type: BLOG_POST_RECEIVED, payload: response}))
    .catch(error => dispatch({type: BLOG_POST_ERROR, payload: error}))
)

export const blogPostError = (error) => ({
  type: BLOG_POST_ERROR,
  payload: error
})

export const blogPostReceived = (data) => ({
  type: BLOG_POST_RECEIVED,
  payload: data
});

export const blogPostUnload = () => ({
  type: BLOG_POST_UNLOAD
});

export const commentListFetch = (id) => (dispatch) => (
  requests.get(`/blog_posts/${id}/comments`)
    .then(response => dispatch({type: COMMENT_LIST_RECEIVED, payload: response}))
    .catch(error => dispatch({type: COMMENT_LIST_ERROR, payload: error}))
)

export const commentListError = (error) => ({
  type: COMMENT_LIST_ERROR,
  payload: error
})

export const commentListReceived = (data) => ({
  type: COMMENT_LIST_RECEIVED,
  payload: data
});

export const commentListUnload = () => ({
  type: COMMENT_LIST_UNLOAD
});

export const userLoginAttempt = (username, password) => (dispatch) => (
  requests.post('/login_check', {username, password}, false)
    .then(response => dispatch(userLoginSuccess(response.token, response.userId)))
    .catch(error => {
      throw new SubmissionError({
        _error: 'Username or password is invalid'
      })
    })
);

export const userLoginSuccess = (token, userId) => ({
  type: USER_LOGIN_SUCCESS,
  token,
  userId
});

export const userProfileFetch = userId => dispatch => (
  requests.get(`/users/${userId}`, true)
    .then(response => dispatch(userProfileReceived(response)))
    .catch(error => dispatch(userProfileError()))
);

export const userProfileReceived = (userData) => ({
  type: USER_PROFILE_RECEIVED,
  userData
});

export const userProfileError = () => ({
  type: USER_PROFILE_ERROR
})

export const userProfileRequest = () => ({
  type: USER_PROFILE_REQUEST
});


