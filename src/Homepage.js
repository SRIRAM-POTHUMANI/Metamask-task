import React from 'react';
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import LoginContainer from "./LoginContainer";
import "./App.css";


function Homepage() {
  return (
    <>
      <CloseSharpIcon className="close" color="secondary" />
      <div className="login">
        <h1 className="create">
          Create an account <VpnKeyIcon className="key" />
        </h1>
        <LoginContainer />
      </div>
    </>
  );
}

export default Homepage;
