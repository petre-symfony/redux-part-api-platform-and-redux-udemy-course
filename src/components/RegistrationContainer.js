import {connect} from 'react-redux';
import React from "react";
import ConfirmationForm from './ConfirmationForm';
import RegisterForm from './RegisterForm';
import {userRegisterComplete} from '../actions';

class RegistrationContainer extends React.Component {
  render() {
    const {registrationSuccess, confirmationSuccess} = this.props;

    if (!registrationSuccess) {
      return (
        <RegisterForm/>
      )
    }

    if(!confirmationSuccess){
      return <ConfirmationForm />
    }

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <h2>Congratulation!</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.registration
});

export default connect(
  mapStateToProps,
  {userRegisterComplete}
)(RegistrationContainer);