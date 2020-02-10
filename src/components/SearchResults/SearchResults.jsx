import React, {useState} from 'react';
import './SearchResults.scss'
import MovieCard from '../MovieCard/MovieCard';

const SearchResults = (props) => {



  return (
    <div className="search-results">
      {props.movies ? (
        props.movies.map(movie => {
          return <MovieCard movie={movie} handleClick={props.handleClick} key={movie.id} inSearch="inSearch"/>
        })
      ) : (
        <p>Search for Movies</p>
      )} 
      
    </div>
  )
}

export default SearchResults;