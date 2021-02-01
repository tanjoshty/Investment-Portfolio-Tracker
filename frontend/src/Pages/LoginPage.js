import React, { useState, useContext } from "react";
import DispatchContext from "../DispatchContext";
import "../Styles/Login.css";
import axios from "axios";

const LoginPage = () => {
  const appDispatch = useContext(DispatchContext);

  const [isSignInPage, setIsSignInPage] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const transition = (e) => {
    e.preventDefault();
    if (isSignInPage) {
      setIsSignInPage(false);
      setEmail("");
    } else {
      setIsSignInPage(true);
      setPassword("");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      if (response.data) {
        appDispatch({ type: "login", data: response.data });
      } else {
        console.log("Incorrect username / password");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", {
        name,
        email,
        password,
      });
      appDispatch({ type: "login", data: response.data });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <div
        className={isSignInPage ? "container" : "right-panel-active container"}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign in</h1>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
