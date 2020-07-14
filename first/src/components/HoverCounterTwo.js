//share functionality between component using render props
import React, { Component } from 'react'

class HoverCounterTwo extends Component {

    render() {
        const { count, incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hoverd {count} times</h1>
            </div>
        )
    }
}

export default HoverCounterTwo
