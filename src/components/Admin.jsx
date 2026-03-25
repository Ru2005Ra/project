import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Admin() {
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    trailer: "",
    category: "",
    desc: "",
    full: "",
  });

  if (!loggedIn) {
    return (
      <div className="login-page">
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            if (password === "mucyo2005") setLoggedIn(true);
            else alert("Wrong password!");
          }}
        >
          Login
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.img || !formData.trailer) {
      alert("Title, Thumbnail, and Trailer are required!");
      return;
    }
    addMovie(formData);
    setFormData({
      title: "",
      img: "",
      trailer: "",
      category: "",
      desc: "",
      full: "",
    });
  };

  return (
    <div className="admin">
      <h2>🛠 Blacine Admin Panel</h2>
      <form onSubmit={handleAddMovie} className="admin-form">
        <input name="title" placeholder="Movie Title" value={formData.title} onChange={handleChange} />
        <input name="img" placeholder="Thumbnail Image URL" value={formData.img} onChange={handleChange} />
        <input name="trailer" placeholder="Trailer YouTube Embed URL" value={formData.trailer} onChange={handleChange} />
        <input name="full" placeholder="Full Movie Link" value={formData.full} onChange={handleChange} />
        <input name="category" placeholder="Category (Action, Cartoon...)" value={formData.category} onChange={handleChange} />
        <textarea name="desc" placeholder="Movie Description" value={formData.desc} onChange={handleChange}></textarea>
        <button type="submit" className="btn">Add Movie</button>
      </form>

      <h3>Uploaded Movies</h3>
      <div className="admin-movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="admin-movie-card">
            <img src={movie.img} alt={movie.title} />
            <h4>{movie.title}</h4>
            <p>{movie.category}</p>
            <button className="btn" onClick={() => deleteMovie(movie.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
