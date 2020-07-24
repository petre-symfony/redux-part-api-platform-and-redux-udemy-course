import React from "react";
import { blogPostFetch } from "../actions";
import { connect } from 'react-redux';
import BlogPost from "./BlogPost";

class BlogPostContainer extends React.Component{
  componentDidMount() {
    this.props.blogPostFetch(this.props.match.params.id);
  }

  render(){
    const { post, isFetching } = this.props.post;

    return (
      <BlogPost post={post} isFetching={isFetching} />
    )
  }
}

const mapStateToProps = (state) => {
  return {post: state.post};
}

export default connect(
  mapStateToProps,
  { blogPostFetch }
)(BlogPostContainer);