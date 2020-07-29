import React from "react";
import { Field, reduxForm, reset} from "redux-form";
import {connect} from 'react-redux';
import {renderField} from "../form";
import { userConfirm } from '../actions';

class ConfirmationForm extends React.Component{
  onSubmit = values => {
    const {userConfirm, reset} = this.props;

    return userConfirm(values.confirmationToken)
      .then(() => {
        reset();
      });
  }

  render() {
    const {handleSubmit, submitting} = this.props;

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <p className="card-text">
            Please confirm your account with token you received in e-mail
          </p>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field name="confirmationToken" label="Confirmation token" type="text" component={renderField} />

            <button
              type="submit"
              className="btn btn-primary btn-big btn-block"
              disabled={submitting}
            >
              Confirm your account
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  'form': 'ConfirmationForm'}
)(connect(
  null,
  {userConfirm}
)(ConfirmationForm));