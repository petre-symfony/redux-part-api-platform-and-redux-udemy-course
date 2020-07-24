import React from "react";
import {format} from 'timeago.js'

class BlogPost extends React.Component{
  render() {
    const { post, isFetching } = this.props;
    console.log(post);

    if(isFetching){
      return (
        <div><i className="fa fa-spinner fa-spin"></i></div>
      );
    }

    if(null === post ){
      return <div>No blog post found</div>
    }

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <h2>{post.title}</h2>
          <p className="card-text">
            {post.content}
          </p>
          <p className="card-text border-top">
            <small className="text-muted">
              {format(post.created)} by &nbsp;
              {post.author.username}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

export default BlogPost;