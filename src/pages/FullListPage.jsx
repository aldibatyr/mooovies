import React, { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard/MovieCard';
import './FullListPage.scss';

const FullListPage = (props) => {







  useEffect(() => {
    props.addMoreItems(props.count)
  }, [props.count])


  return (
    <div className="view-page">
      <div className="list">
        {props.movies.map(movie =>
          <MovieCard key={movie.id} movie={movie} assignSelected={props.assignSelected} />
        )}
      </div>
      <div className="load-button-wrapper">
        <div className="load-more-button">
          <button onClick={() => props.handleButtonClick()}>
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