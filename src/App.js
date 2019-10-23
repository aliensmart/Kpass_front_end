import React from 'react';
import NotLogged from './components/NotLoggedInView/NotloggedInView';
import Logged from './components/LoggedInView/Logged'
import './App.css';

// color used:
// Primary and fail color: #b91d73
// Secodary color: #f953c6
// success color: #42b883
// Background: #f8f8f8;
// color White: #ffff;
// color Black: 0000


function App() {
  const token = sessionStorage.getItem("token")
  let contents = null;
  token ? (contents=(<div><Logged/></div>)):(contents=(<div><NotLogged/></div>))

  return (
    <div className="App">
    {contents}
        
    </div>
  );
}

export default App;
