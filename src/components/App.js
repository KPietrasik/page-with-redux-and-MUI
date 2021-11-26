import React from 'react';

import { useSelector } from 'react-redux'

import {LoginFormConnected} from './LoginForm';
import MainPage from './MainPage';

import './App.css';



function App() {
  const loggedUserName = useSelector((state) => state.loginReducer.loggedUserName);
  
  return (
    <div >
      {loggedUserName ? <MainPage/> : <LoginFormConnected/>}
    </div>
  );
}

export default App;

