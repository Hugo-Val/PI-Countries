import React from 'react';
import './App.css';
import { Route, Routers } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';

function App() {
  return (
    <div className="App">
      <Routers>
        <Route path="/" element={LandingPage} ></Route>
      </Routers>
      </div>
    
  );
}

export default App;
