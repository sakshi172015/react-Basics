import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount() {
        //place to create timers
        this.interval = setInterval(this.tick, 1000)
    }
    
    componentWillMount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default IntervalClassCounter
