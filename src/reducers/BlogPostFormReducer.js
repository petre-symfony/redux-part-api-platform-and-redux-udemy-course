import {
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_ERROR,
  IMAGE_UPLOADED,
  BLOG_POST_FORM_UNLOAD,
  IMAGE_DELETED,
  IMAGE_DELETE_REQUEST
} from '../actions/types';
export default (state = {
  imageRequestInProgress: false,
  image: null,
  images: []
}, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_REQUEST:
    case IMAGE_DELETE_REQUEST:
      return {
        ...state,
        imageRequestInProgress: true
      }
    case IMAGE_UPLOADED:
      return {
        ...state,
        imageRequestInProgress: false,
        images: state.images.concat(action.image)
      }
    case IMAGE_UPLOAD_ERROR:
      return {
        ...state,
        imageRequestInProgress: false
      }
    case BLOG_POST_FORM_UNLOAD:
      return {
        ...state,
        imageRequestInProgress: false,
        image: null,
        images: []
      }
    case IMAGE_DELETED:
      return {
        ...state,
        imageRequestInProgress: false,
        images: state.images.filter(image => image.id !== action.imageId)
      }
    default:
      return state
  }
}