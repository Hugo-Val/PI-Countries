import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Cards} />
      
      </div>
    
  );
}

export default App;
