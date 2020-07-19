//display x and y coordinates 
//adding event listener once in componentDidMount
//will do same in HookMouse using react hooks in functional component
import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y: 0
        }
    }

    logMousePosition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    //cleanup after re render
    componentWillMount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }
    
    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

export default ClassMouse
