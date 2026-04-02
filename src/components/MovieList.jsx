import React from "react";
import { Link } from "react-router-dom";

// You can move this array to a shared file if you want to avoid duplication
const movies = [
  {
    id: 1,
    title: "Inception",
    img: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_SY679_.jpg",
    desc: "A skilled thief enters dreams to steal secrets.",
    category: "Action"
  },
  {
    id: 2,
    title: "Avatar",
    img: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
    desc: "An epic adventure on the planet Pandora.",
    category: "Sci-Fi"
  },
  {
    id: 3,
    title: "The Dark Knight",
    img: "https://m.media-amazon.com/images/I/51EbJjl7uDL._AC_.jpg",
    desc: "Batman faces the Joker in Gotham City.",
    category: "Action"
  },
  {
    id: 4,
    title: "Frozen",
    img: "https://m.media-amazon.com/images/I/71GkZyQ9qVL._AC_SY679_.jpg",
    desc: "A princess with ice powers saves her kingdom.",
    category: "Cartoon"
  },
  {
    id: 5,
    title: "The Conjuring",
    img: "https://m.media-amazon.com/images/I/81vVYt2pU0L._AC_SY679_.jpg",
    desc: "Paranormal investigators face a haunting evil.",
    category: "Horror"
  }
];

function MovieList() {
  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.img} alt={movie.title} className="movie-thumb" />
            <h3>{movie.title}</h3>
            <p>{movie.desc}</p>
            <p className="category-tag">{movie.category}</p>
            <Link to={`/movies/${movie.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;