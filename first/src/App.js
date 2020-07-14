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
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table.js'
import PureComp from './components/PureComp.js'
import ParentComp from './components/ParentComp.js'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User.js'
import CounterPropsRender from './components/CounterPropsRender.js'
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
      <LifecycleA />
      <FragmentDemo />
      <Table />
      <ParentComp />
      <RefsDemo />
      <FocusInput />
      <FRParentInput />
      <PortalDemo />
      <ErrorBoundary>
        <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"/>
      </ErrorBoundary>
      <ClickCounter name="Sakshi"/>
      <HoverCounter />
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? "Sakshi" : "Guest" }/> {/* instead of passing sakshi ill pass a function that retrun sakshi 
      */}
      <CounterPropsRender 
        render={(count, incrementCount) => (
           <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} />
      <CounterPropsRender 
        render={(count, incrementCount) => (
           <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} />
  
    </div>
  );
}

export default App;
