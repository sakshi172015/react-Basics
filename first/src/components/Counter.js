//using
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.incrementFive = this.incrementFive.bind(this);
    }
    handleIncrement = () => {
        //this.state.count = this.state.count + 1 //ui wont change because re-rendering but value will change
        {/* 
        this.setState({
            count: this.state.count+1
        }, 
        () => {
                console.log('Callback value ', this.state.count)//to do something after state has been changed
            }
        )
    */
   //above method passes count 0 everytime in incrementFive function instead use this
            this.setState((prevState, props) => ({
                count: prevState.count+1
            }))
        }
    }

    incrementFive() {
        console.log('Inside incrementFive')
        this.handleIncrement()
        this.handleIncrement()
        this.handleIncrement()
        this.handleIncrement()
        this.handleIncrement()
      }

    render() {
        return (
            <div>
                <p>Count = {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increase</button>
                <button onClick={this.incrementFive}>Increase 5 times</button>
            </div>
        )
    }
}

export default Counter
