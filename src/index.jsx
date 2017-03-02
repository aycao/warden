import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import RootReducer from './reducers';
import Routes from './routes';

const store = createStore(
    RootReducer,
    applyMiddleware(thunk),
);

ReactDOM.render(
    <Provider store={store}>
      <Routes history={browserHistory}/>
    </Provider>,
  document.getElementById('root')
);

