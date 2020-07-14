import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    //cannot be used in cickhandler
    //for the component to become error boundary
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    //
    componentDidCatch (error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary


