//making an http request
//npm install axios 
import React, { Component } from 'react'
const axios = require('axios')

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [], 
             errorMsg: ''
        }
    }
    //only excuted once
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMsg: 'Erro retriving data'
            })
        })
    }
    

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
