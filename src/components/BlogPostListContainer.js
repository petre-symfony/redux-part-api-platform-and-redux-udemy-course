import React from 'react';
import BlogPostList from "./BlogPostList";
import { connect } from 'react-redux';
import { blogPostsListFetch, blogPostListSetPage } from '../actions';
import Spinner from "./Spinner";
import Paginator from "./Paginator";

class BlogPostListContainer extends React.Component {
  componentDidMount() {
    this.props.blogPostsListFetch(this.getQueryParamPage());
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

  changePage = (page) => {
    const {history, blogPostListSetPage} = this.props;

    blogPostListSetPage(page);
    history.push(`/${page}`);
  }

  onNextPageClick = (e) => {
    const {currentPage, pageCount} = this.props;
    const newPage = Math.min(currentPage + 1, pageCount);

    this.changePage(newPage);
  }

  onPreviousPageClick = (e) => {
    const {currentPage, pageCount} = this.props;
    const newPage = Math.max(currentPage - 1, 1);

    this.changePage(newPage);
  }

  render(){
    const { posts, isFetching, currentPage, pageCount, blogPostListSetPage } = this.props;

    if(isFetching){
      return (
        <Spinner />
      );
    }

    return (
      <div>
        <BlogPostList posts={posts}/>
        <Paginator
          currentPage={currentPage}
          pageCount={pageCount}
          setPage={this.changePage}
          nextPage={this.onNextPageClick}
          prevPage={this.onPreviousPageClick}
        />
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