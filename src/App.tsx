import React from 'react';
import './assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from './pages/Main/Main';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Main}></Route>
          <Route path='/login' Component={SignIn}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
