import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Headers from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {
  const auth = useSelector((state)=>{
    return state.auth.isAuthenticated;
  });
  return (
    <React.Fragment>
      <Headers />
      {!auth&&<Auth />}
      {auth&&<UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
