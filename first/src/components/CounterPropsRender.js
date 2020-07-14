import React, { Component } from 'react'

class CounterPropsRender extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
                {/*says take this varibale and function and display as per your need i will take care of behing logic */}
            </div>
        )
    }
}

export default CounterPropsRender
