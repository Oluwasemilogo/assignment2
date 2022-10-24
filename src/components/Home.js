import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <Link to="/" className="home-link">
        <h1 className="home">Home</h1>
      </Link>
      <div>
        <Link to="/users/page/1" className="user-link">
          <button className="users">Users</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
