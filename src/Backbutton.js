import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
function Backbutton() {

  return (
    <>
      <Link to="/">
        <div className="back">
          <span>Back to Login Page</span>
        </div>
      </Link>
    </>
  );
}

export default Backbutton;
