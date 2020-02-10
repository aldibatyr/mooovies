import React, { useState, useEffect } from 'react';
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import MainView from './components/MainView/MainView';
import config from './config';

function App() {


  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  

  const fetchData = async () => {
    setLoading(true);
    setError(false)
    const moviesData = await fetch(`${config.API_ENDPOINT}/movie/popular?api_key=${config.API_KEY}&page=${page}`);
    const genresData = await fetch(`${config.API_ENDPOINT}/genre/movie/list?api_key=${config.API_KEY}`);
    await moviesData.json().then(data => setMovies(data.results)).catch(err => setError(err.message));
    await genresData.json().then(data => setGenres(data.genres)).catch(err => setError(err.message));
    setLoading(false);

  }

  useEffect(() => {
    fetchData();
  }, [page])

  const handleNextPageLoad = () => {
    setPage(page+1)
  }

  return (
    <div className="App">
      {error ? (
        <div className="error-screen">
          {error}
        </div>
      ) : (
          <>
            {
              loading ? (
                <div className="loading-screen" >
                  Loading Your Experience...
                </div>
              ) : (
                  <>
                    <Dashboard />
                    <MainView genres={genres} movies={movies} handleNextPageLoad={handleNextPageLoad} />
                  </>
                )
            }
          </>)}
    </div >
  );
}

export default App;
