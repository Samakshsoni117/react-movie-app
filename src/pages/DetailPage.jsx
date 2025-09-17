import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';
import apiClient from '../api/tmdb';
import DetailPageSkeleton from './DetailPageSkeleton';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addMovieToWatchlist, removeMovieFromWatchlist, isMovieInWatchlist } = useWatchlist();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(`/movie/${id}`);
        setMovie(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovie();
  }, [id]);

  if (loading) {
    return <DetailPageSkeleton />;
  }

  if (error) {
    return <p style={{ textAlign: 'center' }}>Error: {error}</p>;
  }

  if (!movie) {
    return <p style={{ textAlign: 'center' }}>Movie not found.</p>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const movieInWatchlist = isMovieInWatchlist(movie.id);

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Back to Home</Link>
      <div className="detail-content">
        <img src={posterUrl} alt={movie.title} className="detail-poster" />
        <div className="detail-info">
          <h1>{movie.title}</h1>
          <p className="tagline">{movie.tagline}</p>
          <p className="overview">{movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10</p>
          
          {movieInWatchlist ? (
            <button 
              onClick={() => removeMovieFromWatchlist(movie.id)} 
              className="watchlist-btn remove"
            >
              Remove from Watchlist
            </button>
          ) : (
            <button 
              onClick={() => addMovieToWatchlist(movie)} 
              className="watchlist-btn add"
            >
              Add to Watchlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;