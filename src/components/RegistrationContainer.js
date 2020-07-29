import {connect} from 'react-redux';
import React from "react";
import ConfirmationForm from './ConfirmationForm';
import RegisterForm from './RegisterForm';
import {userRegisterComplete} from '../actions';

class RegistrationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 10}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {confirmationSuccess, history, userRegisterComplete} = this.props;
    if(prevProps.confirmationSuccess !== confirmationSuccess && confirmationSuccess){
      this.timer = setInterval(
        () => {
          this.setState(prevState => ({counter: prevState.counter - 1}));
        },
        1000
      )
    }

    if(prevState.counter !== this.state.counter && this.state.counter == 0){
      userRegisterComplete();
      history.push("/");
    }
  }

  componentWillUnmount() {
    this.props.userRegisterComplete();

    if(this.timer){
      clearInterval(this.timer);
    }
  }

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
          <p className="card-text">
            You have confirmed your account. You'll be redirected to home page in &nbsp;
            {this.state.counter} second
          </p>
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