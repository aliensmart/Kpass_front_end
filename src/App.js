import React from 'react';
import NotLogged from './components/NotLoggedInView/NotloggedInView';
import Logged from './components/LoggedInView/Logged'


import './App.css';

function App() {
  const token = sessionStorage.getItem("token")
  let contents = null;
  if (token){
    contents = (
      <div>
        <Logged/>
        
      </div>
    )
  }else{
    contents = (
      <div>
        <NotLogged/>
      </div>
    )
  }

  return (
    <div className="App">
    
    {contents}
      
      
    </div>
  );
}

export default App;
