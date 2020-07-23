import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from 'react-redux';
import history from './history';
import App from './components/App';
import LoginForm from "./components/LoginForm";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(state => state);

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" exact component={App}></Route>
      <Route path="/login" exact component={LoginForm}></Route>
    </Router>
  </Provider>,
  document.querySelector('#root')
);