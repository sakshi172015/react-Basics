import React, { Component } from 'react'

class LifecycleB extends Component {

    //component mounting lifecycle
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sakshi'
        }
        console.log('LifecycleB constructor')
    }

    //component mounting lifecycle
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }

    //component mounting lifecycle
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    

    //component render lifecycle
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }

    //component render lifecycle
    getSnapshotBeforeUpdate() {
        console.log("LifecycleB getSnapShotBeforeUpdate")
        return null
    }

    //component render lifecycle
    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate")
    }

    //component mounting lifecycle
    //component render lifecycle
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B 
            </div>
        )
    }
}

export default LifecycleB
