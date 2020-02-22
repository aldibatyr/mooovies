import React, { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard/MovieCard';
import './FullListPage.scss';
import config from '../config';
import FullList from '../components/FullList/FullList';


const FullListPage = (props) => {

  const [count, setCount] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addMoreItems = async (count) => {
    setLoading(true)
    const moviesData = await fetch(`${config.API_ENDPOINT}/movie/popular?api_key=${config.API_KEY}&page=${count}`);
    await moviesData.json().then(data => setMovies(data.results)).catch(err => setError(err.message));
    setLoading(false);
  }

  const handleButtonClick = () => {
    setCount(count + 1);
  }



  useEffect(() => {
    addMoreItems(count)
  }, [count])


  return (
    <div className="view-page">
      {loading ? (
        <div className="loading-screen">
          Loading Screen...
        </div>
      ) : (error ? (
        <div className="error-screen">
          error...
        </div>
      ) : (
          <FullList movies={movies} assignSelected={props.assignSelected} />
        )
        )}

      <div className="load-button-wrapper">
        <div className="load-more-button">
          <button onClick={() => handleButtonClick()}>
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