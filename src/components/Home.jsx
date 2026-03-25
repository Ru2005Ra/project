import React from "react";
import { Link } from "react-router-dom";

function Home() {
  
    return (
    <div className="about">
      <h1>CINEBET </h1>

      <p>
        CINEBET Movie is a streaming platform made for movie lovers. We provide
        trailers and full movies from different genres — including action,
        horror, cartoons, and science fiction.
      </p>
      <div className="home-buttons">
        <Link to="/movies" className="btn">Browse Movies</Link><br /><br />
        <Link to="/about" className="btn">About Us</Link>
      </div>
    </div>
  );
}

export default Home;
