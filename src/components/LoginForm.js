import React from 'react';
import {reduxForm, Field} from 'redux-form';

class LoginForm extends React.Component {
  renderInput({ input, label, type, meta: {error} }){
    return (
      <div className="form-group">
        <label>{ label }</label>
        <input type={type} { ...input } className="form-control"/>
      </div>
    )
  }

  render(){
    return (
      <div className="text-center">
        <form className="mt-4">
          <Field name="username" label="username" type="text" component={this.renderInput}/>
          <Field name="password" label="password" type="password" component={this.renderInput}/>
          <button type="submit" className="btn btn-primary btn-big btn-block">Log In</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'LoginForm'
})(LoginForm);