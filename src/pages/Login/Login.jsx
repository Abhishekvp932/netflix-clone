import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import netflixSpinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo w-[150px]" />

      <div className="login-form w-full">
        <h1 className="text-[32px]">Sign In</h1>

        <form>
          {/* Uncomment below for Sign Up design */}
          {/* <input type="text" placeholder="Your Name" /> */}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>

          <div className="form-help flex items-center justify-between">
            <div className="remember flex items-center gap-[5px]">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help!</p>
          </div>
        </form>

        <div className="form-switch mt-10">
          <p>
            New to Netflix? <span>Sign Up Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
