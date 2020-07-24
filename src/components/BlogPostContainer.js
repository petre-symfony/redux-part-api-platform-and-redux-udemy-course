import React from "react";
import { blogPostFetch, blogPostUnload } from "../actions";
import { connect } from 'react-redux';
import BlogPost from "./BlogPost";
import Spinner from "./Spinner";

class BlogPostContainer extends React.Component{
  componentDidMount() {
    this.props.blogPostFetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.blogPostUnload();
  }

  render(){
    const { post, isFetching } = this.props;

    if(isFetching){
      return (
        <Spinner />
      );
    }

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