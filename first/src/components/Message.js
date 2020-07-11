//props using class
import React, { Component } from 'react';
class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'This is a must watch'
        }
    }
    changeMessage = () => {
        this.setState({
            message: 'You will not regret this'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Done</button>
            </div>
        )
    }
}
export default Message