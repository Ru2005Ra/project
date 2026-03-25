import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";





import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <h1 className="logo">🎬 CINEBET </h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/about">About Us</Link></li>
             <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Blacine Movie | All Rights Reserved
      </footer>
    </BrowserRouter>
  );
}

export default App;
