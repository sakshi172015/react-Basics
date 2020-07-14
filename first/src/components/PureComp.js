import React, { PureComponent } from 'react'
//Regular component is re rendered every two sec but purecomponent does a shallow comparison
//A pure component implements shouldComponentUpdate with a shallow state comparison
//only if it returns false it re renders otherwise it do not
class PureComp extends PureComponent {
    render() {
        console.log('********Pure Component Render*******')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
