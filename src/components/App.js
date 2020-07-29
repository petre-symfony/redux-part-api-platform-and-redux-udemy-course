import React from 'react';
import { Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import history from '../history';
import LoginForm from "./LoginForm";
import BlogPostForm from "./BlogPostForm";
import BlogPostListContainer from "./BlogPostListContainer";
import BlogPostContainer from "./BlogPostContainer";
import RegistrationContainer from "./RegistrationContainer";
import Header from "./Header";
import requests from "../agent";
import { userProfileFetch, userSetId, userLogout } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem('jwtToken');
    if(token){
      requests.setToken(token);
    }
  }

  componentDidMount() {
    const {userSetId} = this.props;
    const userId = window.localStorage.getItem('userId');

    if(userId){
      userSetId(userId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { userId, userProfileFetch, userData } = this.props;

    if(prevProps.userId !== userId && userId !== null && userData === null){
      userProfileFetch(userId);
    }
  }

  render(){
    const { isAuthenticated, userData, userLogout } = this.props;
    return (
      <div>
        <Router history={history}>
          <Header isAuthenticated={isAuthenticated} userData={userData} logout={userLogout}/>
          <Route path="/:page(\d+)?" exact component={BlogPostListContainer} />
          <Route path="/login" exact component={LoginForm}/>
          <Route path="/register" exact component={RegistrationContainer}/>
          <Route path="/blog_post-form" exact component={BlogPostForm}/>
          <Route path="/blog_posts/:id" exact component={BlogPostContainer}/>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.auth
});

export default connect(
  mapStateToProps,
  { userProfileFetch, userSetId, userLogout }
)(App);