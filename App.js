import React from "react";
import logo from "./logo.png";
import theme from "./Config/theme.js";
import {Switch, Route, useLocation, Redirect} from "react-router-dom";
import Login from "./Views/Login"
import Profile from "./Views/Profile";
import Button from "./Components/Button";
import Errorlabel from "./Components/ErrorLabel";
import LoginForm from "./Components/LoginForm";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1> Solent Mental Health</h1>
        <p> Our aim is to help solent students with there mental health and well-being. There are different tools that have been included to alleviate any stress that your work or personal life can bring. </p>


      </header>

      <footer className="App-footer">
        <p> Contact us at solent for more ways to get help with your mental health!</p>
        <img src="facebook.png" alt="facebook-icon" height="40px" width="40px"></img>
        <img src="insta.jpg" alt="insta-icon" height="40px" width="40px"></img>
      </footer>

      
    </div>
  );
}

export default App;
