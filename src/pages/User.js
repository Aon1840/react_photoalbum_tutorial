import React, {Component} from 'react'
import UserList from '../components/Users/UserList'
import {connect} from 'react-redux'
import {loadUsers} from '../actions'

class User extends Component{
    
    componentDidMount(){
        this.props.dispatch(loadUsers())
    }

    render(){
        const { users } = this.props
        if (users.isRejected) {
            return <div>Err...</div>
        }
        return(
            <div>
                <h1>Users</h1>
                <UserList data= {users.data}/>
            </div>
        )
    }
}

// Call the state from the store => must be add the reducers for sure because the code below call "state.users"
function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps) (User)
