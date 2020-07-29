import React from "react";
import {Field, reduxForm} from "redux-form";
import { connect } from 'react-redux';

class BlogPostForm extends React.Component {
  render() {
    return (
      <div>Create a new blog post</div>
    )
  }
}

export default reduxForm({
  form: 'BlogPostForm'
})(connect(
  null,
  null
)(BlogPostForm));