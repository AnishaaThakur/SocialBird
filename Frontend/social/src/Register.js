import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";
function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
      const response = await axios.post("http://localhost:3000/register", {
        username: username,
        password: password,
      });
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      alert("user not registerd");
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <h1>Register Here</h1>
        <form className="register-form" onSubmit={handleSubmit}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
