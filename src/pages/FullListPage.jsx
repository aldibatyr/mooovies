import React from 'react';
import MovieCard from '../components/MovieCard/MovieCard';

const FullListPage = (props) => {
  return (
    <div className="view-page">
      {props.list.map(movie => 
        <MovieCard movie={movie}/>
      )}
    </div>
  )
}

export default FullListPage;