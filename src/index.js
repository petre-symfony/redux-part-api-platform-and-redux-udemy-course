import React from 'react';
import ReactDom from 'react-dom';
import {createStore, compose, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {tokenMiddleware} from './middleware';

const store = createStore(
  reducers,
  applyMiddleware(thunk, tokenMiddleware)
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);