import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
    reducers,
    applyMiddleware(thunk,promiseMiddleware())
)


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={routes}
        />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
