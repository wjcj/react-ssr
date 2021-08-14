import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import App from './App';
import { createClientStore } from './store';

import './index.sass';

const store = createClientStore();

const Index = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );
};

// https://stackoverflow.com/questions/46865880/react-16-warning-expected-server-html-to-contain-a-matching-div-in-div-due
const renderMethod = module.hot ? ReactDom.render : ReactDom.hydrate;

window.main = () => {
  Loadable.preloadReady().then(() => {
    // ReactDOM.hydrate(<App/>, document.getElementById('app'));
    renderMethod(<Index/>, document.getElementById('root'));
  });
};