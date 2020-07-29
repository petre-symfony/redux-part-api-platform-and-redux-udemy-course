import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import { canWritePost } from '../apiUtils';
import { renderField } from '../form';
import { blogPostAdd,blogPostFormUnload, imageDelete } from '../actions';
import ImageUpload from "./ImageUpload";
import ImageBrowser from "./ImageBrowser";

class BlogPostForm extends React.Component {
  onSubmit = values =>{
    const {blogPostAdd, reset, history, images} = this.props;

    return blogPostAdd(values.title, values.content, images)
      .then(() => {
        reset();
        history.push("/");
      })
  }

  componentWillUnmount() {
    this.props.blogPostFormUnload();
  }

  render() {
    const {
      handleSubmit,
      submitting,
      error,
      images,
      imageRequestInProgress,
      imageDelete
    } = this.props;

    if(!canWritePost(this.props.userData)){
      return <Redirect to="/login"></Redirect>
    }

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field name="title" label="Title" type="text" component={renderField} />
            <Field name="content" label="Content" type="textarea" component={renderField} />

            <ImageUpload />
            <ImageBrowser
              images={images}
              deleteHandler={imageDelete}
              isLocked={imageRequestInProgress}
            />

            <button
                type="submit"
                disabled={submitting || imageRequestInProgress}
                className="btn btn-primary btn-big btn-block"
            >
              Add Blog Post
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.auth.userData,
  ...state.blogPostForm
})

export default reduxForm({
  form: 'BlogPostForm'
})(connect(
  mapStateToProps,
  { blogPostAdd, blogPostFormUnload, imageDelete }
)(BlogPostForm));