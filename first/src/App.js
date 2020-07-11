//props using function component
import React from 'react';
import './App.css';
import Greeting from './components/Greeting.js'
import Welcome from './components/Welcome.js'

function App() {
  return (
    <div className="App">
      <Greeting first="Jonas" last="Kahnwald">
        <p>Beginning is the end, end is the begining</p>
      </Greeting>
      <Greeting first="Martha" last="Nielson">
        <button>New world</button>
      </Greeting>

      <Welcome first="Lucifer" last="Morningstar"/>
      <Welcome first="Chloe" last="Decker"/>
    </div>
  );
}

export default App;
