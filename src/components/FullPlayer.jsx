import React, { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Hls from 'hls.js';

export default function FullPlayer() {
  const { id } = useParams();
  const location = useLocation();
  const passedMovie = location.state?.movie || null;
  const [movie, setMovie] = useState(passedMovie);
  const [type, setType] = useState(null);
  const videoRef = useRef(null);

 
  const detectType = (url) => {
    if (!url) return;
    if (url.includes('youtube.com') || url.includes('youtu.be')) setType('youtube');
    else if (url.endsWith('.m3u8')) setType('hls');
    else setType('mp4');
  };

  // Fetch movie data if not passed via location.state
  useEffect(() => {
    async function fetchMeta() {
      if (passedMovie) {
        setMovie(passedMovie);
        detectType(passedMovie.full);
        return;
      }
      try {
        const res = await fetch(`/api/movies/${id}`);
        if (!res.ok) return;
        const data = await res.json();
        setMovie(data);
        detectType(data.full);
      } catch (err) {
        console.error('Failed to fetch movie metadata', err);
      }
    }
    fetchMeta();
    // eslint-disable-next-line
  }, [id]); // Only depend on id

  // Handle HLS playback
  useEffect(() => {
    let hls;
    if (type === 'hls' && movie?.full && videoRef.current) {
      const video = videoRef.current;
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(movie.full);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {});
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = movie.full;
      } else {
        console.error('HLS not supported in this browser');
      }
    }
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [type, movie]);

  if (!movie) return <div>Loading player...</div>;

  if (type === 'youtube') {
    const match = movie.full.match(/(youtu\.be\/|v=|embed\/)([^&?/]+)/);
    const videoId = match ? match[2] : null;
    const src = videoId
      ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
      : movie.full;
    return (
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2>{movie.title}</h2>
        <iframe
          title="YouTube Full Player"
          width="100%"
          height="640"
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div style={{ marginTop: 12 }}>
          <Link to={`/movies/${movie.id}`} className="btn">← Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <h2>{movie.title}</h2>
      <video
        ref={videoRef}
        controls
        width="100%"
        height="640"
        style={{ background: '#000' }}
        preload="metadata"
      >
        {type === 'mp4' && <source src={movie.full} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
      <div style={{ marginTop: 12 }}>
        <Link to={`/movies/${movie.id}`} className="btn">← Back</Link>
      </div>
    </div>
  );
}