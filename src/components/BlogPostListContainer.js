import React from 'react';
import BlogPostList from "./BlogPostList";
import { connect } from 'react-redux';
import { fetchBlogPosts, addBlogPosts } from '../actions';
import requests from '../agent';

class BlogPostListContainer extends React.Component {
  componentDidMount() {
    requests.get('/blog_posts').then(response => console.log(response));
    this.props.fetchBlogPosts();
  }

  render(){
    const { posts } = this.props.posts;
    return (
      <BlogPostList posts={posts}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts};
}
export default connect(
  mapStateToProps,
  { fetchBlogPosts, addBlogPosts }
)(BlogPostListContainer);