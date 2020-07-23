import React from 'react';
import BlogPostList from "./BlogPostList";
import { connect } from 'react-redux';
import { fetchBlogPosts, addBlogPosts } from '../actions';

class BlogPostListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
    setTimeout(this.props.addBlogPosts, 3000);
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