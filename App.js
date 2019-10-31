import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message/>
     {/*<Greet name="gupta" ans="okay">
       <p>This is children props</p>
     </Greet>
     <Greet name="singh" ans="very good">
       <button>
         Action
       </button>
     </Greet>
     <Greet name ="abcd" ans="not good"/>
         <Welcome  name="gupta" ans="okay"/>
         <Welcome name="singh" ans="very good"/>
         < Hello/>*/}
        
      </div>
    );
  }
}

export default App;
