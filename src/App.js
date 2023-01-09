import React from 'react';
import Home from "./components/Home"
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
      <About/>
      <Signup/>
    </div>
  );
}

export default App;
