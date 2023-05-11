import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Route, useLocation } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Activity from './components/Activity/Activity';
import Nav from './components/Nav/Nav';
import { addLocation, getCountriesByName } from './redux/actions/actions';


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(addLocation(location.pathname)); 
}, [location, dispatch]);

function onSearch(name) {
  if (name !== "") {
    return dispatch(getCountriesByName(name));
  }
  
}


  return (
    
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Cards} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/activity" component={Activity} />

      
      </div>
    
  );
}

export default App;
