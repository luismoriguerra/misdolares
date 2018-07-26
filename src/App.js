import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/store';
import Root from './containers';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
