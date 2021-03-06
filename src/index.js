import React from 'react';
import ReactDOM from 'react-dom';
import './style/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import './style/main.css';
import { createStore } from 'redux';
import rootReducer from './components/redux/reducers/rootReducer';
import { Provider } from 'react-redux';

// redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
  rootReducer,
  composeWithDevTools()
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
