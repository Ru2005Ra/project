
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

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
  }
];

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id, 10));

  if (!movie) {
    return (
      <div className="notfound">
        <h2>Movie Not Found</h2>
        <Link to="/movies" className="btn">Back to Movies</Link>
      </div>
    );
  }

  const handleWatchFull = () => {
    navigate(`/player/${movie.id}`, { state: { movie } });
  };

  const handleDownload = async () => {
    try {
      
      const downloadUrl = `/api/download/${movie.id}`;

      const res = await fetch(downloadUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/octet-stream'
          
        }
      });

      if (res.status === 401 || res.status === 403) {
        throw new Error('You are not authorized to download this file.');
      }

      if (!res.ok) {
        const contentType = res.headers.get('content-type') || '';
        const text = contentType.includes('application/json') ? await res.json() : await res.text();
        throw new Error(text?.message || text || `Server error ${res.status}`);
      }

      const blob = await res.blob();
      const disposition = res.headers.get('content-disposition') || '';
      const filenameMatch = disposition.match(/filename="?(.+)"?/);
      const filename = filenameMatch ? filenameMatch[1] : `${movie.title.replace(/\s+/g, '_')}.mp4`;

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error', err);
      alert(`Download failed: ${err.message}`);
    }
  };

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

          <div style={{ marginTop: 12 }}>
            <button onClick={handleWatchFull} className="btn" style={{ marginRight: 8 }}>
              ▶ Watch Full
            </button>

            <button onClick={handleDownload} className="btn">
              ⤓ Download
            </button>
          </div>
        </div>
      </div>

      <Link to="/movies" className="btn back-btn">← Back to Movies</Link>
    </div>
  );
}

export default MovieDetail;
