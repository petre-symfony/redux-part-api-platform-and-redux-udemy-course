import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import {userLoginAttempt} from "../actions";

class LoginForm extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.token !== this.props.token){
      this.props.history.push("/");
    }
  }

  renderInput({ input, label, type, meta: {error} }){
    return (
      <div className="form-group">
        <label>{ label }</label>
        <input type={type} { ...input } className="form-control"/>
      </div>
    )
  }

  onSubmit = (values) => {
    return this.props.userLoginAttempt(
      values.username,
      values.password
    )
  }

  render(){
    const {handleSubmit, error} = this.props;
    console.log(this.props);

    return (
      <div className="text-center">
        {error && <div className="alert alert-danger">{error}</div>}
        <form className="mt-4" onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="username" label="username" type="text" component={this.renderInput}/>
          <Field name="password" label="password" type="password" component={this.renderInput}/>
          <button type="submit" className="btn btn-primary btn-big btn-block">Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth
})

export default reduxForm({
  form: 'LoginForm'
})(connect(
  mapStateToProps,
  { userLoginAttempt }
)(LoginForm));