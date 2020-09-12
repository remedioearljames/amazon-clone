import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <p className="login_signin">Sign-In</p>
        <strong className="login_emailLabel">E-mail</strong>
        <form>
          <input
            className="login_input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <strong className="login_emailLabel">Password</strong>
          <input
            className="login_password"
            type="password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <button className="login_signInButton" type="submit" onClick={signIn}>
            Continue
          </button>
        </form>
        <p className="login_aggreement">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
