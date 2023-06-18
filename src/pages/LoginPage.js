import React from "react";
import Navigation from "../components/Navigation";
import LoginForm from "../components/LoginForm";
import { login, signUp } from "../utils/api";
import LandingPageFooter from "../components/Footer";

function LoginPage({ loginSuccess }) {
  async function onLoginHandler(user) {
    const { error, data } = await login(user);
    if (!error) {
      console.log(data);
      const input = document.querySelectorAll('.login-form input');
      input[0].value = '';
      input[1].value = '';
      loginSuccess(data);
    }
  }

  async function onSignUpHandler(user) {
    const { error } = await signUp(user);
    if (!error) {
      document.getElementById('flip').checked = false;
      const input = document.querySelectorAll('.signup-form input');
      input[0].value = '';
      input[1].value = '';
      input[2].value = '';
    }
  }

  return (
    <>
      <Navigation />
      <section>
          <LoginForm login={onLoginHandler} signUp={onSignUpHandler} />
      </section>
      <LandingPageFooter/>
    </>
  )
}

export default LoginPage;