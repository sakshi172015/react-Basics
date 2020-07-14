//higher order component used
import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        /*props are send doem to withCounter not ClickCounter*/

        )
    }
}

export default withCounter(ClickCounter, 5)
