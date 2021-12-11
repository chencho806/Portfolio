import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
     
     <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
        
      
    </div>
  );
}

export default App;



