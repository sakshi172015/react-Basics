import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

//this indicates state sahaalow comparison, it checks the refernce so even if you concatinate it wont re render so do not do this 
//only works on class based component
//class ParentComp extends Component {
class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sakshi'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Sakshi'
            })
        }, 2000)
    }

    render() {
        console.log('********Parent Component Render*******')
        return (
            <div>
                Parent Component
                {/*<RegularComp name={this.state.name}></RegularComp>*/}
                {/*<PureComp name={this.state.name}></PureComp>*/}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
