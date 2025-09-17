import React, { useState, useEffect } from 'react';
import apiClient from '../api/tmdb';
import MovieCard from '../components/MovieCard/MovieCard';
import MovieCardSkeleton from '../components/MovieCard/MovieCardSkeleton';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await apiClient.get('/trending/movie/week');
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className="homepage-container">
      <h1>Trending Movies This Week</h1>
      {error && <p style={{ textAlign: 'center' }}>Error: {error}</p>}
      <div className="movie-list">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => <MovieCardSkeleton key={index} />)
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
    </div>
  );
};

export default HomePage;