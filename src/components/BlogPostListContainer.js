import React from 'react';
import BlogPostList from "./BlogPostList";
import { connect } from 'react-redux';
import { blogPostsListFetch } from '../actions';
import Spinner from "./Spinner";

class BlogPostListContainer extends React.Component {
  componentDidMount() {
    this.props.blogPostsListFetch();
  }

  render(){
    const { posts, isFetching } = this.props;

    if(isFetching){
      return (
        <Spinner />
      );
    }

    return (
      <BlogPostList posts={posts}/>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.blogPostList
})
export default connect(
  mapStateToProps,
  { blogPostsListFetch }
)(BlogPostListContainer);