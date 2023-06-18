import React from "react";
import { Link } from "react-router-dom";
import { putAccessToken } from "../utils/api";
import ThemeButton from './buttons/ThemeButton';
import { IoMdLogOut } from 'react-icons/io';

function NavigationLogin({ user, setUser }) {
  function logoutHandler() {
    setUser(null);
    putAccessToken('');
  }

  console.log(user.fullname);

  return (
    <div className="nav-login">
      <div className="nav-login__inner">
      <Link to="/" ><img src="Logo.png" alt="Logo" className="logoNav"></img></Link>
        <ul className="nav-login-list">
          <li className="theme"><ThemeButton /></li>
          <li>
            <Link to='/'  className="login-text">Notes</Link>
          </li>
          <li>
            <Link to='/categories'  className="login-text">Categories</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>{user.fullname} <IoMdLogOut className="logoutbutton"/></button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationLogin;