import React, { Component } from 'react'
import LifecycleB from './LifecycleB.js'

class LifecycleA extends Component {

    //component mounting lifecycle
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sakshi'
        }
        console.log('LifecycleA constructor')
    }

    //component mounting lifecycle
    //component render lifecycle
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }

    //component mounting lifecycle
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
    //component render lifecycle
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }

    //component render lifecycle
    getSnapshotBeforeUpdate() {
        console.log("LifecycleA getSnapShotBeforeUpdate")
        return null
    }

    //component render lifecycle
    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    
    //component mounting lifecycle
    //component render lifecycle
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                Lifecycle A 
                <div>
                    <button onClick={this.changeState}>Change State</button>
                </div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
