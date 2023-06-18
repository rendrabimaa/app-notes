import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import SignUpForm from "./SignUpForm";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function LoginForm({ login, signUp }) {
  const [username, handleUsernameChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      username,
      password,
    });
  };

  return (
    <div className="loginnnn">
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="Gambar 1.jpg" alt="" />
            <div className="text">
              <span className="text-1">Note IT! <br /> Take the best notes</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
          <div className="back">
            <LazyLoadImage
                src="Gambar 1.jpg"
                effect="opacity"
                className="backImg"
            />
            <div className="text">
              <span className="text-1">Note IT! <br />Take the best notes</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={onSubmitHandler}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your username" value={username} onChange={handleUsernameChange} required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">Don't have an account? <label for="flip">Sign up now</label></div>
                </div>
              </form>
            </div>
            <SignUpForm signUp={signUp} />
          </div>
        </div>
      </div>
    </div>
  );
}

LoginForm.propType = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
