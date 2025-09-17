import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import apiClient from '../api/tmdb';
import MovieCard from '../components/MovieCard/MovieCard';
import MovieCardSkeleton from '../components/MovieCard/MovieCardSkeleton';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiClient.get('/search/movie', {
          params: { query },
        });
        setSearchResults(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="homepage-container">
      <h1>Search Results for "{query}"</h1>
      {error && <p>Error: {error}</p>}
      <div className="movie-list">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => <MovieCardSkeleton key={index} />)
          : (
              searchResults.length > 0
                ? searchResults.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                : <p>No movies found for "{query}".</p>
            )
        }
      </div>
    </div>
  );
};

export default SearchPage;