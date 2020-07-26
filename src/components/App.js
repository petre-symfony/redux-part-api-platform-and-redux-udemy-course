import React from 'react';
import { Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import history from '../history';
import LoginForm from "./LoginForm";
import BlogPostListContainer from "./BlogPostListContainer";
import BlogPostContainer from "./BlogPostContainer";
import Header from "./Header";
import requests from "../agent";
import { userProfileFetch } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem('jwtToken');
    if(token){
      requests.setToken(token);
    }
  }

  componentDidMount() {
    const {userProfileFetch} = this.props;
    const userId = window.localStorage.getItem('userId');

    if(userId){
      userProfileFetch(userId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { userId, userProfileFetch } = this.props;

    if(prevProps.userId !== userId && userId !== null){
      userProfileFetch(userId);
    }
  }

  render(){
    const { isAuthenticated, userData } = this.props;
    return (
      <div>
        <Router history={history}>
          <Header isAuthenticated={isAuthenticated} userData={userData}/>
          <Route path="/" exact component={BlogPostListContainer} />
          <Route path="/login" exact component={LoginForm}/>
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
  { userProfileFetch }
)(App);