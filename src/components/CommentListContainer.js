import React from "react";
import { connect } from 'react-redux';
import { commentListFetch, commentListUnload } from "../actions";
import Spinner from "./Spinner";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import LoadMore from "./LoadMore";

class CommentListContainer extends React.Component{
  componentDidMount() {
    this.props.commentListFetch(this.props.blogPostId);
  }

  componentWillUnmount() {
    this.props.commentListUnload();
  }

  onLoadMoreClick = () => {
    const {blogPostId, currentPage, commentListFetch} = this.props;

    commentListFetch(blogPostId, currentPage);
  }

  render(){
    const {
      comments,
      isFetching,
      isAuthenticated,
      blogPostId,
      currentPage,
      pageCount
    } = this.props;
    const showLoadMore = pageCount > 1 && currentPage <= pageCount;

    if(isFetching){
      return (
        <Spinner />
      );
    }

    return (
      <div>
        <CommentList comments={comments} />
        {showLoadMore &&
          <LoadMore
            label="Load more comments..."
            onClick={this.onLoadMoreClick}
            disabled={isFetching}
          />
        }
        {isAuthenticated  && <CommentForm blogPostId={blogPostId}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.commentList,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { commentListFetch, commentListUnload }
)(CommentListContainer);