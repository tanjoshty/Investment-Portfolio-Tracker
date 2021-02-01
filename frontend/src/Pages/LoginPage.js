import React, { useState } from "react";
import "../Styles/Login.css";

const LoginPage = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const transition = (e) => {
    e.preventDefault();
    if (isSignInPage) {
      setIsSignInPage(false);
    } else {
      setIsSignInPage(true);
    }
  };

  return (
    <>
      <div
        className={isSignInPage ? "container" : "right-panel-active container"}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Have an Account?</h1>
              <p>Click the button below to sign in to your account.</p>
              <button className="ghost" id="signIn" onClick={transition}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Don't Have an Account?</h1>
              <p>
                Click the button below to enter your personal details and start
                journey with us.
              </p>
              <button className="ghost" id="signUp" onClick={transition}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
