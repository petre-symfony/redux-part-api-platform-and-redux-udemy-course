import {connect} from 'react-redux';
import React from "react";
import ConfirmationForm from './ConfirmationForm';
import RegisterForm from './RegisterForm';

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
  }
}

const mapStateToProps = state => ({
  ...state.registration
});

export default connect(
  mapStateToProps,
  null
)(RegistrationContainer);