import React from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard/MovieCard';

const WatchlistPage = () => {
  const { watchlist } = useWatchlist();

  return (
    <div className="homepage-container">
      <h1>My Watchlist</h1>
      {watchlist.length > 0 ? (
        <div className="movie-list">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Your watchlist is empty. Add some movies!</p>
      )}
    </div>
  );
};

export default WatchlistPage;