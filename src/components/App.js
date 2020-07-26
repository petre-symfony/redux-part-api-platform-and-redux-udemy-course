import React from 'react';
import { Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import history from '../history';
import LoginForm from "./LoginForm";
import BlogPostListContainer from "./BlogPostListContainer";
import BlogPostContainer from "./BlogPostContainer";
import Header from "./Header";
import requests from "../agent";

class App extends React.Component {
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem('jwtToken');
    if(token){
      requests.setToken(token);
    }
  }

  render(){
    const { isAuthenticated } = this.props;

    return (
      <div>
        <Router history={history}>
          <Header isAuthenticated={isAuthenticated}/>
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

export default connect(mapStateToProps, null)(App);