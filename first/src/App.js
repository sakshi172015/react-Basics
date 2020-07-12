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
import Stylesheet from './components/Stylesheet.js'
import Inline from './components/Inline.js'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form.js'
import LifecycleA from './components/LifecycleA.js'

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
      <NameList />
      <Stylesheet primary={true}/>
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Form />
      */}
      <LifecycleA />
    </div>
  );
}

export default App;
