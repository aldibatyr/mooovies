import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FullListPage from './pages/FullListPage';
import Navigation from './components/Navigation/Navigation';
import DetailedViewPage from './pages/DetailedViewPage';
import config from './config';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(null);


  const fetchData = async () => {
    setLoading(true);
    setError(false)
    const moviesData = await fetch(`${config.API_ENDPOINT}/movie/popular?api_key=${config.API_KEY}&page=${page}`);
    const genresData = await fetch(`${config.API_ENDPOINT}/genre/movie/list?api_key=${config.API_KEY}`);
    await moviesData.json().then(data => setMovies(data.results)).catch(err => setError(err.status_message));
    await genresData.json().then(data => setGenres(data.genres)).catch(err => setError(err.status_message));
    setLoading(false);

  };

  useEffect(() => {
    fetchData();
  }, [page]);


  const handleSearchQuerySet = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchFromSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const stringToArray = Array.from(searchQuery);
    let parsedArray = stringToArray.map(letter => {
      if (letter === ' ') {
        return '%20';
      }
      return letter;
    });
    let parsedString = parsedArray.join('');
    const searchResult = await fetch(`${config.API_ENDPOINT}/search/movie?api_key=${config.API_KEY}&query=${parsedString}`);
    await searchResult
      .json()
      .then(data => {
        if (data.results === []) {
          setError('nothing matches the search query');
        }
        setMovies(data.results);
      })
      .catch((err) => setError(err.status_message));
    setLoading(false);
  };

  const handleNextPageLoad = () => {
    setPage(page + 1);
  };

  
  return (
    <div className="App">
      <header>
        <Navigation genres={genres} handleSearchQuerySet={handleSearchQuerySet} fetchFromSearch={fetchFromSearch}/>
      </header>
      <Switch>
        <Route exact path='/'>
          <MainPage genres={genres} movies={movies} handleNextPageLoad={handleNextPageLoad} handleSearchQuerySet={handleSearchQuerySet} fetchFromSearch={fetchFromSearch}/>
        </Route>
        <Route path='/full-list'>
          <FullListPage list={movies}/>
        </Route>
        <Route path={`/selected/:id`}>
          <DetailedViewPage/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;