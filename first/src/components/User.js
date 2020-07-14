//render prop is technique of sharing code b/w react component 
//using prop whose value is function
import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)} {/*because prop received is a function so it has to be called*/}
            </div>
        )
    }
}

export default User
