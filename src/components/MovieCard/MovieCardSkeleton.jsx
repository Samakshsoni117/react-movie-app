import React from 'react';
import './MovieCard.css';

const MovieCardSkeleton = () => {
  return (
    <div className="movie-card">
      <div className="skeleton" style={{ height: '300px' }}></div>
      <div className="movie-info">
        <h3><div className="skeleton" style={{ height: '1rem', width: '80%' }}></div></h3>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;