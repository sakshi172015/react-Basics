//props using function component
import React from 'react';
import './App.css';
import Greeting from './components/Greeting.js'
import Welcome from './components/Welcome.js'
import Message from './components/Message.js'
import Counter from './components/Counter.js'
import FunctionClick from './components/FunctionClick.js'
import ClassClick from './components/ClassClick.js'
import EventBind from './components/EventBind.js'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting.js' 
import NameList from './components/NameList.js'

function App() {
  return (
    <div className="App">
      {/*
      <Greeting first="Jonas" last="Kahnwald">
        <p>Beginning is the end, end is the begining</p>
      </Greeting>
      <Greeting first="Martha" last="Nielson">
        <button>New world</button>
      </Greeting>

      <Welcome first="Lucifer" last="Morningstar"/>
      <Welcome first="Chloe" last="Decker"/>
      <Message />
      <Counter></Counter>
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      */}
      <NameList />
    </div>
  );
}

export default App;
