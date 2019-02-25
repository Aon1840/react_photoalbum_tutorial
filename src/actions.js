export function loadUsers() {
    return (dispatch) => {
        return dispatch(fetchUser())
    }
}
// redux must be send object to action

function fetchUser() {
    return {
        type: 'LOAD_USERS',
        payload: fetch('https://jsonplaceholder.typicode.com/users').then(result => result.json())
    }
}