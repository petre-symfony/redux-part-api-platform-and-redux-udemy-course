import React from 'react';
import { format } from 'timeago.js';
import { Link } from "react-router-dom";

class BlogPostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { posts, isFetching } = this.props;

    if(isFetching){
      return (
        <div><i className="fa fa-spinner fa-spin"></i></div>
      );
    }

    if(null === posts || 0 === posts.length){
      return <div>No blog posts</div>
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
                    {format(post.createdAt)}
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