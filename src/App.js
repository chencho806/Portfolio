import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
     
     <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
      </Switch>
        
      
    </div>
  );
}

export default App;



