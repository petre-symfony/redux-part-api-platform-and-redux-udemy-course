import React from "react";

class BlogPost extends React.Component{
  render() {
    const { post, isFetching } = this.props;

    if(isFetching){
      return (
        <div><i className="fa fa-spinner fa-spin"></i></div>
      );
    }

    if(null === post ){
      return <div>No blog post found</div>
    }

    return (
      <div>{post.title}</div>
    );
  }
}

export default BlogPost;