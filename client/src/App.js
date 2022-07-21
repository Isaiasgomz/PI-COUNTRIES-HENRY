import React from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import Home from './components/Home'
import Landing from './components/Landing'
import Activity from './components/Activity'

function App() {
  return (
    <React.Fragment>
      <Route path={'/'} component={Landing}/>
      <Route exact path={'/home'} component={Home}/>
      <Route path={'/createActivity'} component={Activity}/>
    </React.Fragment>
  );
}

export default App;
