import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./post.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        });
        setPosts(response.data);
      } catch (error) {
        setError("Failed to fetch posts. Please try again later.");
      }
    };

    if (!localStorage.getItem("jwtToken")) {
      setError("You are not logged in.");
    } else {
      fetchData();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <div>
      {localStorage.getItem("jwtToken") && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
      {error && <div className="error-message">{error}</div>}
      <div className="post-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
