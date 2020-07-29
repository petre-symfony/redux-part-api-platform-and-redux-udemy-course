import React from "react";
import {Field, reduxForm} from "redux-form";
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import { canWritePost } from '../apiUtils';

class BlogPostForm extends React.Component {
  render() {
    if(!canWritePost(this.props.userData)){
      return <Redirect to="/login"></Redirect>
    }

    return (
      <div>Create a new blog post</div>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.auth.userData
})

export default reduxForm({
  form: 'BlogPostForm'
})(connect(
  mapStateToProps,
  null
)(BlogPostForm));