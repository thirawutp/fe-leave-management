import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import rootReducer from './reducer'
import { loadState, saveState } from './localStorage'
import _ from 'lodash'

const persistState = loadState()

const store = createStore(rootReducer, persistState)

store.subscribe(_.throttle(() => {
  saveState(store.getState())
}, 1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

