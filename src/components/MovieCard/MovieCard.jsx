import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const placeholderImage = 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img 
        src={movie.poster_path ? posterUrl : placeholderImage} 
        alt={movie.title} 
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;