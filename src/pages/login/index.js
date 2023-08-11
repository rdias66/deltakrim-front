import React from 'react';
import './styles.css'; 

const Login = () => {
  return (
    <div className="body">
      <div className="center-box">
        <form>
          <input type="email" id="email" name="email" placeholder="Enter your email" required className="input" />
          <br />
          <input type="password" id="password" name="password" placeholder="Enter your password" required className="input" />
          <br />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
