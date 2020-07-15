import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {

    //static contextType = UserType this or 19th line
    //limitation: only class, and only one contaxt

    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF />
            </div>
        )
    }
}

ComponentE.contextType = UserContext
export default ComponentE
