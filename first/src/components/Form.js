//three simple steps
//1. add html
//2. add state and assign
//3. onclick handle
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input tyle='text' 
                        value={this.state.username} 
                        onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <labe>Comments</labe>
                    <textarea 
                        value={this.state.comments} 
                        onChange= {this.handleCommentsChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.value} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Form
