//using context 
//1. Create a context
//2. Provide the value
//3.use
//See Usercontect.js file
import React, { Component } from 'react'
import ComponentE from './ComponentE.js'

class ComponentC extends Component {
    render() {
        return (
            <div>
                Component C
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC
