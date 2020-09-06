import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";

function Login() {
  return (
  <div className="login">
      <div className="login_container">
        <p className="login_signin">
            Sign-In
        </p>
        <strong className="login_emailLabel">
            Email(phone for mobile accounts)
        </strong>
        <input />
        <Link to="/" className="header_link">
        <button>Continue</button>
        </Link>
        <p className="login_aggreement">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
      </div>
  </div>
  );
}

export default Login;
