import React from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import Home from './conponets/Home'
import Landing from './conponets/Landing'

function App() {
  return (
    <React.Fragment>
      <Route path={'/'} component={Landing}/>
      <Route path={'/home'} component={Home}/>
    </React.Fragment>
  );
}

export default App;
