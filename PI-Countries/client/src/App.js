import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Activity from './components/Activity/Activity';


function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Cards} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/activity" component={Activity} />

      
      </div>
    
  );
}

export default App;
