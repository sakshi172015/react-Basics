//props using class
import React, { Component } from 'react';
class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.first} {this.props.last}</h1>
    }
}
export default Welcome