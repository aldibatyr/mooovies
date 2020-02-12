import React from 'react';
import './TopResults.scss';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

const TopResults = (props) => {


  return (
    <div className="top-results">
      <div className="title">
        <span>most popular</span>
      </div>
      <div className="movies-cards">
        {props.topMovies.map(movie => <MovieCard handleClick={props.handleClick} key={movie.id} movie={movie} />)}
        <div className="top-results-button">
          <button>
            <Link to='/full-list'>
              Full List
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopResults;