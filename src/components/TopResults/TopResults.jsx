import React from 'react';
import './TopResults.scss';
import MovieCard from '../MovieCard/MovieCard';

const TopResults = (props) => {


  return (
    <div className="top-results">
      <div className="title">
        <span>Top Results</span>
      </div>
      <div className="movies-cards">
          {props.topMovies.map(movie => <MovieCard handleClick={props.handleClick} key={movie.id} movie={movie} />)}
        <div className="see-more-button">
          <button onClick={() => props.handleNextPageLoad()}>
            See More
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopResults;