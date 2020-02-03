import React, {useState} from 'react';
import './TopResults.scss';
import MovieCard from '../MovieCard/MovieCard';

const TopResults = (props) => {

  const day = new Date().getDay();
  const month = new Date().getMonth();
  const year = new Date().getFullYear()
  const makeDate = `${day} ${month} ${year}`;


  return (
    <div className="top-results">
      <div className="title">
        <span>Top Results</span>
      </div>
      <div className="movies-cards">
        {props.topMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default TopResults;