import React from 'react';
import { Route, Link } from "react-router-dom";
import Login from "./Forms/Login"
import SignUp from "./Forms/SignUp"
import Questions from "./Qustioncard/Questions"
import styled from "styled-components";
import './forms.css';





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
        <Link className= "links" to="/" style={{ textDecoration: 'none', color:'whitesmoke'}}  >Home</Link>
        <Link className= "links"to="/Join" style={{ textDecoration: 'none', color:'whitesmoke'}}>Join Now</Link>
        <Link className= "links"to="/Questions" style={{ textDecoration: 'none', color:'whitesmoke'}}>Ask a Question</Link>
        {/* <Link to="/Search">Search for Questions</Link> */}
      </Jumpman>


      <h2 className="title">Mentor with Greatness</h2>

      <Route exact path="/" component={Login}/>
      <Route path="/Join" component={SignUp}/>
      <Route path="/Questions" component={Questions}/>
      {/* <Route exact path="/Search" component={Search}/>  */}


      
    </main>

    
  );
}

export default App;
