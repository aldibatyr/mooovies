import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const FullList = (props) => {
  return (
    <div className="list">
      {props.movies.map(movie =>
        <MovieCard key={movie.id} movie={movie} assignSelected={props.assignSelected} />
      )}
    </div>
  )
}

export default FullList
