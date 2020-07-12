//Conditional rendering
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false 
        }
    }
    
    render() {

        /* 1.
        if(this.state.isLoggedIn) {
            return (<div>Welcome Sakshi</div>)
        } else {
            return (<div>Welcome Guest</div>)
        }*/

        /* 2.
        let message 
        if(this.state.isLoggedIn) {
            message = <div>welcome Sakshi</div>
        } else {
            message = <div>Welcome Guest</div>
        }
    
        return (
            <div>{message}</div>
        )*/

        // 3. Ternary approach
        return (
            this.state.isLoggedIn ? (
            <div>Welcome Sakshi</div> 
            ) : (
            <div>Welcome Guest</div>
            )
        )

        /* 4. Short circuit approach
        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
        */

    }
}

export default UserGreeting
