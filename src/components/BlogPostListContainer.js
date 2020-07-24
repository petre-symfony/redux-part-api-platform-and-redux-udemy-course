import React from 'react';
import BlogPostList from "./BlogPostList";
import { connect } from 'react-redux';
import { blogPostsListFetch } from '../actions';

class BlogPostListContainer extends React.Component {
  componentDidMount() {
    this.props.blogPostsListFetch();
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
  { blogPostsListFetch }
)(BlogPostListContainer);