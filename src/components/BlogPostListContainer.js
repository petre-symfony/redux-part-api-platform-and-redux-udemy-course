import React from 'react';
import BlogPostList from "./BlogPostList";

class BlogPostListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.posts = [
      {
        id: 7,
        title: "Hello"
      }
    ];
  }

  render(){
    return (
      <BlogPostList posts={this.posts}/>
    )
  }
}

export default BlogPostListContainer;