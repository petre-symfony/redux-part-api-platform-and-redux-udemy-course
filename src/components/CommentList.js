import React from "react";
import {format} from 'timeago.js';
import Message from "./Message";

class CommentList extends React.Component{
  render() {
    const { comments } = this.props;

    if(null === comments || comments.length === 0){
      return <Message message="No comments exist for this post" />
    }

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        Not done yet
      </div>
    );
  }
}

export default CommentList;