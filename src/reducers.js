import {combineReducers} from 'redux'

// reducer name "countAge"
function countAge(state=0, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// reducer name "users"
const initialState = {isrejected: true, data:null}
function users(state={}, action){

    // the receiver that receive the dispatch
    switch(action.type){
        case 'LOAD_USERS_PENDING':
            return {
                isrejected: false,
                data: null
            }
        case 'LOAD_USERS_FULFILLED':
            return {
                isrejected: false,
                data: action.payload
            }
        case 'LOAD_USERS_REJECTED':
            return {
                isrejected: true,
                data: null
            }
        default:
            return state
    }
}

const reducers = combineReducers({
    counter: countAge,
    users
})

export default reducers