import React from 'react';
import Router from './components/NotLoggedInView/Router'
import Header from './components/NotLoggedInView/Header/Header'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
