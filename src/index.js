import React from 'react';
import ReactDom from 'react-dom';
import { createStore, compose } from "redux";
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);