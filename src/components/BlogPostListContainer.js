import React from 'react';
import BlogPostList from "./BlogPostList";
import { connect } from 'react-redux';
import { blogPostsListFetch } from '../actions';
import Spinner from "./Spinner";
import Paginator from "./Paginator";

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
      <div>
        <BlogPostList posts={posts}/>
        <Paginator currentPage={1} pageCount={10}/>
      </div>
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