import {BLOG_POST_LIST, BLOG_POST_LIST_ADD} from "./types";

export const fetchBlogPosts = () => {
  return {
    type: BLOG_POST_LIST,
    payload: [
      {
        id: 7,
        title: "Hello"
      },
      {
        id: 8,
        title: "Hello girl"
      }
    ]
  }
}

export const addBlogPosts = () => {
  return {
    type: BLOG_POST_LIST_ADD,
    payload:
      {
        id: 9,
        title: "Newly added blog"
      }
  }
}
