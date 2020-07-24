import React from 'react';
import { format } from 'timeago.js';
import { Link } from "react-router-dom";
import Message from "./Message";

class BlogPostList extends React.Component {

  render(){
    const { posts } = this.props;

    if(null === posts || 0 === posts.length){
      return <Message message="No blog posts" />
    }

    return (
      <div>
        <ul>
          {posts && posts.map(post => (
            <div className="card mb-3 mt-3 shadow-sm" key={post.id}>
              <div className="card-body">
                <Link to={`blog_posts/${post.id}`}>{post.title}</Link>
                <p className="bordet-top card-text">
                  <small className="text-muted">
                    {format(post.created)} by &nbsp;
                    {post.author.username}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogPostList;