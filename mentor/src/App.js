import React from 'react';
import { Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <main>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/questions">Ask a Question</Link>
        <Link to="/search">Search for Questions</Link>
      </Nav>


      <Route exact path="/" component={Login}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/question" component={Questions}/>
      <Route exact path="/search" component={Search}/>
    </main>
  );
}

export default App;
