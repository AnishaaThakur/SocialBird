import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <>
      <header>
        <nav class="navbar">
          <div class="logo">
            <img src="./images/image4.jpeg" />
            <h2>Anisha Thakur</h2>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <Link to="/login" class="login-btn">
            LOG IN
          </Link>
        </nav>
      </header>
      <div className="intro-container">
        <div className="intro">
          <h1 className="heading">An Intermediate UI/UX Designer</h1>
        </div>
      </div>
      <footer>
        <p>Author: Anisha Thakur</p>
        <p>Email: anisha@example.com</p>
      </footer>
    </>
  );
}

export default Home;
