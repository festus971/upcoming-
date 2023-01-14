import React from 'react';
import Home from "./components/Home"
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar/>
      <Home username ={user.name} city ={user.city} color = {user.color} />
      <About bio={user.bio} links={user.links} />
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
