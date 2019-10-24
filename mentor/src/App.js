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
  text-Decoration: none;
  color: black;
  background-color: lightsalmon;

`

function App() {
  return (
    <main>
      <Jumpman>
        <Link to="/" style={{ textDecoration: 'none', color:'whitesmoke'}}  >Home</Link>
        <Link to="/Join" style={{ textDecoration: 'none', color:'whitesmoke'}}>Join Now</Link>
        <Link to="/Questions" style={{ textDecoration: 'none', color:'whitesmoke'}}>Ask a Question</Link>
        {/* <Link to="/Search">Search for Questions</Link> */}
      </Jumpman>


      <Route exact path="/" component={Login}/>
      <Route path="/Join" component={SignUp}/>
      <Route path="/Questions" component={Questions}/>
      {/* <Route exact path="/Search" component={Search}/>  */}


      
    </main>

    
  );
}

export default App;
