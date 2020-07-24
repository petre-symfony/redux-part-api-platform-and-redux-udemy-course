import React from 'react';
import { Router, Route } from "react-router-dom";
import history from '../history';
import LoginForm from "./LoginForm";
import BlogPostListContainer from "./BlogPostListContainer";
import BlogPostContainer from "./BlogPostContainer";
import Header from "./Header";

class App extends React.Component {
  render(){
    return (
      <div>
        <Router history={history}>
          <Header />
          <Route path="/" exact component={BlogPostListContainer} />
          <Route path="/login" exact component={LoginForm}/>
          <Route path="/blog_posts/:id" exact component={BlogPostContainer}/>
        </Router>
      </div>
    )
  }
}
export default App;