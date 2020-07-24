import React from "react";
import { blogPostFetch, blogPostUnload } from "../actions";
import { connect } from 'react-redux';
import BlogPost from "./BlogPost";

class BlogPostContainer extends React.Component{
  componentDidMount() {
    this.props.blogPostFetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.blogPostUnload();
  }

  render(){
    const { post, isFetching } = this.props;

    return (
      <BlogPost post={post} isFetching={isFetching} />
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.blogPost
})

export default connect(
  mapStateToProps,
  { blogPostFetch, blogPostUnload }
)(BlogPostContainer);