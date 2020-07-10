import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas : [
      {name: 'Dikshant', age: 20, belt: 'black', id: 1},
      {name: 'Sanyam', age: 19, belt: 'black', id: 2},
      {name: 'Kushal', age: 21, belt: 'black', id: 3}
    ]
  }
  addNinja = (ninja) => {
      ninja.id = Math.random();
      let ninjas=[...this.state.ninjas, ninja]//spread operator
      this.setState({
        ninjas: ninjas
      })
  }
  deleteNinja = (id) => {
    //console.log(id);
    //non-destructive method
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
    render() {
      return (
        <div className="App">
          <h1>My first react app</h1>
          <p>Welcome :)</p>
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
          <AddNinja addNinja={this.addNinja}/>
        </div>
      );
    }
}

export default App;
