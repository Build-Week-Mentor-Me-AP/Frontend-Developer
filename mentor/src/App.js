import React from 'react';
import { Route, Link } from "react-router-dom";
import Login from "./Forms/Login"
import SignUp from "./Forms/SignUp"
import Questions from "./Qustioncard/Questions"
import styled from "styled-components";
import './App.css';


const Jumpman = styled.div `

text-align:center;
  padding:30px;
  display:flex;
  justify-content:space-evenly;
  text-declaration: none;
  color: black;

`

function App() {
  return (
    <main>
      <Jumpman>
        <Link to="/">Home</Link>
        <Link to="/Join">Join Now</Link>
        <Link to="/Questions">Ask a Question</Link>
        {/* <Link to="/Search">Search for Questions</Link> */}
      </Jumpman>


      <Route exact path="/" component={Login}/>
      <Route path="/Join" component={SignUp}/>
      <Route path="/Question" component={Questions}/>
      {/* <Route exact path="/Search" component={Search}/>  */}


      
    </main>

    
  );
}

export default App;
