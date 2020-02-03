import React from 'react'
import config from '../../config';


const MovieCard = (props) => {

  return (
    <div className="movie-card">
          <img className='background-image' srcSet={`${config.IMAGE_PATH}/w500${props.movie.poster_path}`} alt="cover"/>
          <div className="movie-info">
            <h4>{props.movie.original_title}</h4>
            <p>{props.movie.release_date}</p>
          </div>
        </div>
  )
}

export default MovieCard;