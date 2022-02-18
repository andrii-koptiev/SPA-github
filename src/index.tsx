import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';

const Root = () => (
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
