import React from "react";
import { Field, reduxForm } from 'redux-form';
import {renderField} from '../form';

class RegisterForm extends React.Component{
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <form action="">
            <Field name="username" label="username" type="text" component={renderField} />
            <Field name="password" label="password" type="password" component={renderField} />
            <Field name="retypedPassword" label="Re-type password" type="password" component={renderField} />
            <Field name="email" label="email" type="text" component={renderField} />
            <Field name="name" label="name" type="text" component={renderField} />

            <div className="form-check form-group">
              <input type="checkbox" className="form-check-input" value={false}/>
              <label className="form-check-label">I agree to the terms and conditions</label>
            </div>

            <button type="submit" className="btn btn-primary btn-big btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'RegisterForm'
})(RegisterForm);

