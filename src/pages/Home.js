import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
    // state = {age:0}
    render(){
        return(
            <div>
                <h3>อายุของคุณ: {this.props.age} ปี</h3>
                <button onClick={this.props.increateAge}>+คลิกบวกอายุ</button>
                <button onClick={this.props.decreateAge}>+คลิกลบอายุ</button>
            </div>
        )
    }
    // increaseAge =()=> {
    //     this.setState((prevState) => {
    //         return{
    //             age: prevState.age + 1
    //         }
    //     })
    // }

    // decreaseAge =()=> {
    //     this.setState((prevState) => {
    //         return {
    //             age: prevState.age - 1
    //         }
    //     })
    // }
}

function mapStateToprops(state) {
    return {
        age: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increateAge: ()=> {
            dispatch({type: 'INCREMENT'})
        },
        decreateAge: ()=> {
            dispatch({type: 'DECREMENT'})
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Home)