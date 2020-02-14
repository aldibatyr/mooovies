import React from 'react';
import './MovieCard.scss';
import config from '../../config';


const MovieCard = (props) => {

  // const onClick={() => props.handleClick(props.movie)}

  return (
    <div className="movie-card" >
        <img className='background-image' srcSet={`${config.IMAGE_PATH}/w500${props.movie.poster_path}`} alt="cover" />
        <div className="movie-info">
          <h4>{props.movie.original_title}</h4>
          <p>{props.movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard;