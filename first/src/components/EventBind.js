//event binding
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // 3.
        //this.clickHandler = this.clickHandler.bind(this) //in official document and probably best
    }
    /*
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        //this keyword is undefined here thus event binding is necessary
    }
    */

    // 4.
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/*1. <button onClick={this.clickHandler.bind(this)}>Click</button>*/}
               {/*2. <button onClick={() => this.clickHandler()}>Click</button>*/}
               <button onClick={this.clickHandler}>Click</button> 
            </div>
        )
    }
}

export default EventBind
