import React from 'react';
import { Route, Link } from "react-router-dom";
import Login from "./Forms/Login"
import SignUp from "./Forms/SignUp"
import styled from 'styled-components'
import './App.css';


const Nav = styled.div `

color: black;

`

function App() {
  return (
    <main>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/Join">Join Now</Link>
        {/* <Link to="/Questions">Ask a Question</Link>
        <Link to="/Search">Search for Questions</Link>  */}
      </Nav>


      <Route exact path="/" component={Login}/>
      <Route exact path="/Join" component={SignUp}/>
      {/* <Route exact path="/Question" component={Questions}/>
      <Route exact path="/Search" component={Search}/> */}


      <Login/>
      <SignUp/>
    </main>

    
  );
}

export default App;
