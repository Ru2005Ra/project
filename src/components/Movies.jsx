import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Movies() {
  const { movies } = useContext(MovieContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const categories = ["All", ...new Set(movies.map((m) => m.category))];
  const filteredMovies =
    selectedCategory === "All"
      ? movies
      : movies.filter((m) => m.category === selectedCategory);

  return (
    <div className="movies">
      <h2>🎬 CINEBET</h2>

      <div className="category-filter">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {selectedMovie && (
        <div className="selected-trailer">
          <h3>🎥 {selectedMovie.title} Trailer</h3>
          <iframe
            width="100%"
            height="500"
            src={selectedMovie.trailer}
            title={selectedMovie.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <a
            href={selectedMovie.full}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⬇️ Download Full Movie
          </a>
          <button className="btn" onClick={() => setSelectedMovie(null)}>
            Close Trailer
          </button>
        </div>
      )}

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <img src={movie.img} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
