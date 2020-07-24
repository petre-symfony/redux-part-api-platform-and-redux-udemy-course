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
        {comments.map(comment => {
          return (
            <div className="card-body border-bottom" key={comment.id}>
              <p className="card-text mb-0">
                {comment.content}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {format(comment.created)} by &nbsp;
                  {comment.author.username}
                </small>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentList;