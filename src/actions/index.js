import {
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_RECEIVED,
  BLOG_POST_ERROR,
  BLOG_POST_UNLOAD,
  BLOG_POST_LIST_SET_PAGE,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_UNLOAD,
  COMMENT_ADD,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_RECEIVED,
  USER_PROFILE_ERROR,
  USER_SET_ID,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_CONFIRMATION_SUCCESS,
  USER_REGISTER_COMPLETE,
  IMAGE_UPLOAD_ERROR,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOADED
} from "./types";
import requests from '../agent';
import {SubmissionError} from 'redux-form';
import {parseApiErrors} from '../apiUtils';

export const blogPostsListFetch = (page = 1) => (dispatch) => {
  requests.get(`/blog_posts?page=${page}`)
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

export const blogPostListSetPage = (page) => ({
  type: BLOG_POST_LIST_SET_PAGE,
  page
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

export const blogPostAdd = (title, content) => dispatch => (
  requests.post('/blog_posts', {
    title,
    content
  })
    .catch(error => {
      if (401 === error.response.status){
        return dispatch(userLogout());
      } else if (403 === error.response.status) {
        throw new SubmissionError({
          _error: 'You do not have rights to publish blog posts!'
        })
      }
      throw new SubmissionError(parseApiErrors(error))
    })
);

export const blogPostUnload = () => ({
  type: BLOG_POST_UNLOAD
});

export const commentListFetch = (id, page=1) => (dispatch) => (
  requests.get(`/blog_posts/${id}/comments?page=${page}`)
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

export const commentAdd = (comment, blogPostId) => dispatch => (
   requests.post('/comments', {
     content: comment,
     post: `/api/blog_posts/${blogPostId}`
   })
     .then(response => dispatch(commentAdded(response)))
     .catch(error => {
       if (401 === error.response.status){
         return dispatch(userLogout());
       }
       throw new SubmissionError(parseApiErrors(error))
     })
);

export const commentAdded = (comment) => ({
  type: COMMENT_ADD,
  comment
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

export const userLogout = () => ({
  type: USER_LOGOUT
});

export const userProfileFetch = userId => dispatch => (
  requests.get(`/users/${userId}`, true)
    .then(response => dispatch(userProfileReceived(userId, response)))
    .catch(error => dispatch(userProfileError(userId)))
);

export const userProfileReceived = (userId, userData) => ({
  type: USER_PROFILE_RECEIVED,
  userData,
  userId
});

export const userProfileError = (userId) => ({
  type: USER_PROFILE_ERROR,
  userId
})

export const userSetId = (userId) => ({
  type: USER_SET_ID,
  userId
})

export const userRegister = (username, name, email, plainPassword, retypedPassword) => dispatch => (
  requests.post('/users', {username, name, plainPassword, retypedPassword, email}, false)
    .then(response => dispatch(userRegisterSuccess()))
    .catch(error => {
      throw new SubmissionError(parseApiErrors(error))
    })
);

export const userRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS
})

export const userConfirm = (confirmationToken) => dispatch => (
  requests.post('/users/confirm', {confirmationToken}, false)
    .then(response => dispatch(userConfirmationSuccess()))
    .catch(error => {
      throw new SubmissionError({
        _error: 'Confirmation token is invalid'
      })
    })
);

export const userConfirmationSuccess = () => ({
  type: USER_CONFIRMATION_SUCCESS
});

export const userRegisterComplete = () => ({
  type: USER_REGISTER_COMPLETE
});

export const imageUpload = file => dispatch => {
  dispatch(imageUploadedRequest());
  return requests.upload('/images', file)
    .then(response => dispatch(imageUploaded(response)))
    .catch(error => dispatch(imageUploadError()))
}

export const imageUploadedRequest = () => ({
  type: IMAGE_UPLOAD_REQUEST
})

export const imageUploadError = (error) => ({
  type: IMAGE_UPLOAD_ERROR
})

export const imageUploaded = (data) => ({
  type: IMAGE_UPLOADED,
  image: data
})

