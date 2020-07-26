import React from "react";
import { connect } from 'react-redux';
import { commentListFetch, commentListUnload } from "../actions";
import Spinner from "./Spinner";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentListContainer extends React.Component{
  componentDidMount() {
    this.props.commentListFetch(this.props.blogPostId);
  }

  componentWillUnmount() {
    this.props.commentListUnload();
  }

  render(){
    const { comments, isFetching, isAuthenticated } = this.props;

    if(isFetching){
      return (
        <Spinner />
      );
    }

    return (
      <div>
        <CommentList comments={comments} />
        {isAuthenticated  && <CommentForm/>}
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