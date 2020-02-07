import React, {useState} from 'react';
import './TopResults.scss';
import MovieCard from '../MovieCard/MovieCard';

const TopResults = (props) => {


  return (
    <div className="top-results">
      <div className="title">
        <span>Top Results</span>
      </div>
      <div className="movies-cards">
        {props.topMovies.map(movie => <MovieCard handleClick={props.handleClick} key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default TopResults;