import React from 'react';
import BlogPostList from "./BlogPostList";
import { connect } from 'react-redux';
import { blogPostsListFetch, blogPostListSetPage } from '../actions';
import Spinner from "./Spinner";
import Paginator from "./Paginator";

class BlogPostListContainer extends React.Component {
  componentDidMount() {
    this.props.blogPostsListFetch();
  }

  render(){
    const { posts, isFetching, currentPage, blogPostListSetPage } = this.props;

    if(isFetching){
      return (
        <Spinner />
      );
    }

    return (
      <div>
        <BlogPostList posts={posts}/>
        <Paginator currentPage={currentPage} pageCount={10} setPage={blogPostListSetPage}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.blogPostList
})
export default connect(
  mapStateToProps,
  { blogPostsListFetch, blogPostListSetPage }
)(BlogPostListContainer);