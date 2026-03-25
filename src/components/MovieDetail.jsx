import React from "react";
import { useParams, Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Inception",
    img: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_SY679_.jpg",
    desc: "A skilled thief enters dreams to steal secrets.",
    category: "Action",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    full: "https://example.com/inception.mp4"
  },
  {
    id: 2,
    title: "Avatar",
    img: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
    desc: "An epic adventure on the planet Pandora.",
    category: "Sci-Fi",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    full: "https://example.com/avatar.mp4"
  },
  {
    id: 3,
    title: "The Dark Knight",
    img: "https://m.media-amazon.com/images/I/51EbJjl7uDL._AC_.jpg",
    desc: "Batman faces the Joker in Gotham City.",
    category: "Action",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    full: "https://example.com/darkknight.mp4"
  },
  {
    id: 4,
    title: "Frozen",
    img: "https://m.media-amazon.com/images/I/71GkZyQ9qVL._AC_SY679_.jpg",
    desc: "A princess with ice powers saves her kingdom.",
    category: "Cartoon",
    trailer: "https://www.youtube.com/embed/TbQm5doF_Uc",
    full: "https://example.com/frozen.mp4"
  },
  {
    id: 5,
    title: "The Conjuring",
    img: "https://m.media-amazon.com/images/I/81vVYt2pU0L._AC_SY679_.jpg",
    desc: "Paranormal investigators face a haunting evil.",
    category: "Horror",
    trailer: "https://www.youtube.com/embed/k10ETZ41q5o",
    full: "https://example.com/conjuring.mp4"
  },
];

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="notfound">
        <h2>Movie Not Found</h2>
        <Link to="/movies" className="btn">Back to Movies</Link>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p className="category-tag">Category: {movie.category}</p>

      <div className="movie-detail-content">
        <img src={movie.img} alt={movie.title} className="detail-image" />
        <div className="movie-info">
          <p>{movie.desc}</p>
          <h3>🎥 Watch Trailer</h3>
          <iframe
            width="100%"
            height="315"
            src={movie.trailer}
            title={movie.title}
            allowFullScreen
          ></iframe>

          <a href={movie.full} className="btn" target="_blank" rel="noreferrer">
            ▶ Watch Full Movie
          </a>
        </div>
      </div>

      <Link to="/movies" className="btn back-btn">← Back to Movies</Link>
    </div>
  );
}

export default MovieDetail;
