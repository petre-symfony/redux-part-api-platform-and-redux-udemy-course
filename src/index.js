import React from 'react';
import ReactDom from 'react-dom';
import { createStore, compose } from "redux";
import { Provider } from 'react-redux';
import App from './components/App';


const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(state => state);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);