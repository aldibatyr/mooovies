import React from 'react'
import Navigation from '../Navigation/Navigation';
import TopResults from '../TopResults/TopResults';
import SelectedItem from '../SelectedItem/SelectedItem';
import SearchResults from '../SearchResults/SearchResults';
import './MainView.scss';

const MainView = (props) => {
  return (
    <div className="main-view">
      <Navigation genres={props.genres}/>
      <TopResults topMovies={props.movies.slice(0,3)}/>
      <SelectedItem/>
      <SearchResults/>
    </div>
  )
}

export default MainView;