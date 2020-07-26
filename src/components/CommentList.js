import React from "react";
import {format} from 'timeago.js';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Message from "./Message";
import './CommentList.css';

class CommentList extends React.Component{
  render() {
    const { comments } = this.props;

    if(null === comments || comments.length === 0){
      return <Message message="No comments exist for this post" />
    }

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <TransitionGroup>
          {comments.map(comment => {
            return (
              <CSSTransition key={comment.id} timeout={1000} classNames="fade">
                <div className="card-body border-bottom">
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
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}

export default CommentList;