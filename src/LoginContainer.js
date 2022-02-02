import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function LoginContainer() {
  return (
    <div className="login_container">
      <h6 className="text-start">Choose how you'd like to sign in:</h6>
      <div className="level">
        <div className="beginner">
          <span className="violet_text">Beginner ?</span>
          <button className="email_button">Email</button>
        </div>
        <div className="advanced">
          <span className="violet_text">Advanced ?</span>
          <button className="connect_button">Connect Wallet</button>
        </div>
      </div>
      <Link to="/back">
        <div className="metamask">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
            alt="Metamask Logo"
            className="metamask_logo"
          />
          <span className="metamask_text">Metamask</span>
        </div>
      </Link>
      <Link to="/back">
        <div className="trust_wallet">
          <img
            src="https://trustwallet.com/assets/images/media/assets/TWT.png"
            alt="trust wallet Logo"
            className="trustwallet_logo"
          />
          <span className="trustwallet_text">Trust Wallet</span>
        </div>
      </Link>
      <Link to="/back">
        <div className="coinbase_wallet">
          <img
            src="https://logosarchive.com/wp-content/uploads/2021/12/Coinbase-icon-symbol-1.png"
            alt="coinbase Wallet Logo"
            className="coinbase_logo"
          />
          <span className="coinbasewallet_text">Coinbase Wallet</span>
        </div>
      </Link>
        <div className="email_container">
          <span className="add_email_line1">Add your email:</span>
          <span className="add_email_line2">
            Please add an email to recieve in-game notifications
          </span>
          <input
            type="text"
            className="email_box"
            placeholder="email@example.com"
          />
        </div>
      <Link to="/back">
        <div className="continue">Continue</div>
      </Link>
        <span className="policy">
          By logging in you indiacte that you have read and agree to our{" "}
          <span>Terms of Use</span> and <span>Privacy Policy</span>
        </span>
        <div>
          <span className="have">Have and account?</span>{" "}
         <Link to="/back"> <span className="Login">Login</span></Link>
        </div>
    </div>
  );
}

export default LoginContainer;
