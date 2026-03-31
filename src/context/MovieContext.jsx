
import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    
    {
      id: 1,
      title: "Inception",
      img: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_SY679_.jpg",
      desc: "A skilled thief enters dreams to steal secrets.",
      category: "Action",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      full: "https://example.com/inception.mp4",
    },
    {
      id: 2,
      title: "John Wick 4",
      img: "https://m.media-amazon.com/images/I/71A8N0X+ZBL._AC_SY679_.jpg",
      desc: "A legendary assassin seeks revenge.",
      category: "Action",
      trailer: "https://www.youtube.com/embed/qEVUtrk8_B4",
      full: "https://example.com/johnwick.mp4",
    },
    {
      id: 3,
      title: "Mission Impossible: Fallout",
      img: "https://m.media-amazon.com/images/I/81l6Dgrlq+L._AC_SY679_.jpg",
      desc: "Ethan Hunt faces a new global threat.",
      category: "Action",
      trailer: "https://www.youtube.com/embed/wb49-oV0F78",
      full: "https://example.com/mi-fallout.mp4",
    },
    {
      id: 4,
      title: "Black Panther",
      img: "https://m.media-amazon.com/images/I/81kP6LkLzHL._AC_SY679_.jpg",
      desc: "The King of Wakanda defends his people.",
      category: "Action",
      trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
      full: "https://example.com/blackpanther.mp4",
    },

    
    {
      id: 5,
      title: "The Conjuring",
      img: "https://m.media-amazon.com/images/I/81vVYt2pU0L._AC_SY679_.jpg",
      desc: "Paranormal investigators face evil forces.",
      category: "Horror",
      trailer: "https://www.youtube.com/embed/k10ETZ41q5o",
      full: "https://example.com/conjuring.mp4",
    },
    {
      id: 6,
      title: "Insidious: The Red Door",
      img: "https://m.media-amazon.com/images/I/91RuJCOFz4L._AC_SY679_.jpg",
      desc: "A family faces dark spirits from their past.",
      category: "Horror",
      trailer: "https://www.youtube.com/embed/ZuQuOnYnr3Q",
      full: "https://example.com/insidious.mp4",
    },
    {
      id: 7,
      title: "Annabelle",
      img: "https://m.media-amazon.com/images/I/91FzXFXr9tL._AC_SY679_.jpg",
      desc: "A cursed doll terrorizes a young couple.",
      category: "Horror",
      trailer: "https://www.youtube.com/embed/paFgQNPGlsg",
      full: "https://example.com/annabelle.mp4",
    },

    
    {
      id: 8,
      title: "Frozen",
      img: "https://m.media-amazon.com/images/I/71GkZyQ9qVL._AC_SY679_.jpg",
      desc: "A princess with ice powers saves her kingdom.",
      category: "Cartoon",
      trailer: "https://www.youtube.com/embed/TbQm5doF_Uc",
      full: "https://example.com/frozen.mp4",
    },
    {
      id: 9,
      title: "Despicable Me",
      img: "https://m.media-amazon.com/images/I/81Um4AkwlfL._AC_SY679_.jpg",
      desc: "A villain changes his life after adopting girls.",
      category: "Cartoon",
      trailer: "https://www.youtube.com/embed/zzCZ1W_CUoI",
      full: "https://example.com/despicableme.mp4",
    },
    {
      id: 10,
      title: "Kung Fu Panda",
      img: "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_SY679_.jpg",
      desc: "A clumsy panda becomes a kung fu hero.",
      category: "Cartoon",
      trailer: "https://www.youtube.com/embed/PXi3Mv6KMzY",
      full: "https://example.com/kungfu.mp4",
    },

   
    {
      id: 11,
      title: "Avatar",
      img: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
      desc: "Humans vs Na'vi on the planet Pandora.",
      category: "Sci-Fi",
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
      full: "https://example.com/avatar.mp4",
    },
    {
      id: 12,
      title: "Interstellar",
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
      desc: "Explorers travel through a wormhole to save mankind.",
      category: "Sci-Fi",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      full: "https://example.com/interstellar.mp4",
    },
  ]);

  const addMovie = (movie) => setMovies([...movies, { id: Date.now(), ...movie }]);
  const deleteMovie = (id) => setMovies(movies.filter((m) => m.id !== id));

  return (
    <MovieContext.Provider value={{ movies, addMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
