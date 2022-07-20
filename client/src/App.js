import React from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import Home from './components/Home'
import Landing from './components/Landing'

function App() {
  return (
    <React.Fragment>
      <Route path={'/'} component={Landing}/>
      <Route exact path={'/home'} component={Home}/>
    </React.Fragment>
  );
}

export default App;
