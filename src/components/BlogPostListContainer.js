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

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {currentPage, blogPostsListFetch, blogPostListSetPage} = this.props;

    if(prevProps.match.params.page !== this.getQueryParamPage()){
      blogPostListSetPage(this.getQueryParamPage());
    }
    
    if(prevProps.currentPage !== currentPage){
      blogPostsListFetch(currentPage);
    }
  }

  getQueryParamPage = () => {
    return Number(this.props.match.params.page) || 1;
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