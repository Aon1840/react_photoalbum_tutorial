import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

import {Router, browserHistory} from 'react-router'
import routes from './routes'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

// reducer
// function countAge(state = 0,action){
//     switch(action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }

// const store = createStore(countAge)
// store.subscribe(()=> {console.log('subscribe', store.getState())})
// console.log('befor dispatch', store.getState())
// store.dispatch({
//     type:'INCREMENT'
// })

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
