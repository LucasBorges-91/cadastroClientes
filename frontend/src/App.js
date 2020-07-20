import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Register from './pages/Register';
import CustomerDetails from './pages/CustomerDetails';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/register" component={ Register }/>
            <Route path="/edit" component={ CustomerDetails }/>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
