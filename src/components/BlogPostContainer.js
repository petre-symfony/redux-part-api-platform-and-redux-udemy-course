import React from "react";

class BlogPostContainer extends React.Component{
  componentDidMount() {
    console.log(this.props);
  }

  render(){
    return (
      <div>Returned from blog post</div>
    )
  }
}

export default BlogPostContainer;