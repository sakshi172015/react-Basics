//basic higher order component
import React from 'react'
//passing parameters in higher order component
const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {
            return (
            <WrappedComponent 
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props} //passes name prop from app.js to ClickCounter.js
            />
            )
        }
    }
    return WithCounter
}

export default withCounter