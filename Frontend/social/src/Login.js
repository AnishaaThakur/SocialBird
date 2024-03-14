import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/login", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem("jwtToken", response.data.token);
        navigate("/posts");
      }
    } catch (error) {
      setLoginError("invalid username or password");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>Login Here</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={handleNameChange}
            placeholder="Enter Your Name"
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Your Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {loginError && <p className="login-error">{loginError}</p>}
        <br />
        <br />
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
