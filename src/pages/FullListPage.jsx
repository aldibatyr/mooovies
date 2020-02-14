import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import config from '../config';
import './FullListPage.scss';

const FullListPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    setError(false)
    const moviesData = await fetch(`${config.API_ENDPOINT}/movie/popular?api_key=${config.API_KEY}&page=${page}`);
    await moviesData.json().then(data => setMovies(data.results)).catch(err => setError(err.status_message));
    setLoading(false);

  };

  useEffect(() => {
    fetchData();
  }, []);

  const addMoreItems = async () => {
    setLoading(true);
    setError(false);
    const moviesData = await fetch(`${config.API_ENDPOINT}/movie/popular?api_key=${config.API_KEY}&page=${page}`);
    await moviesData.json().then(data => setMovies([...movies, data.results])).catch(err => setError(err.status_message));
  }

  const handleNextPageLoad = () => {
    setPage(page + 1);
  };

  return (
    <div className="view-page">
      <div className="list">
        {movies.map(movie =>
          <MovieCard movie={movie} />
        )}
      </div>
      <div className="load-button-wrapper">
        <div className="load-more-button">
          <button onClick={() => handleNextPageLoad()}>
            <span>
              see more
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FullListPage;