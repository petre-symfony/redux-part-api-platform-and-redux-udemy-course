import React from "react";
import { blogPostFetch } from "../actions";
import { connect } from 'react-redux';

class BlogPostContainer extends React.Component{
  componentDidMount() {
    this.props.blogPostFetch(this.props.match.params.id);
  }

  render(){
    return (
      <div>Returned from blog post</div>
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