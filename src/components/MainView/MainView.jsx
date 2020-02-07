import React, {useState} from 'react'
import Navigation from '../Navigation/Navigation';
import TopResults from '../TopResults/TopResults';
import SelectedItem from '../SelectedItem/SelectedItem';
import SearchResults from '../SearchResults/SearchResults';
import './MainView.scss';

const MainView = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleClick = (movieObj) => {
    setSelectedMovie(movieObj)
  }
  return (
    <div className="main-view">
      <Navigation genres={props.genres}/>
      <TopResults handleClick={handleClick} topMovies={props.movies.slice(0,3)}/>
      <SelectedItem selectedMovie={selectedMovie}/>
      <SearchResults/>
    </div>
  )
}

export default MainView;