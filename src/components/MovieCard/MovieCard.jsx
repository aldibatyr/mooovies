import React from 'react';
import {useHistory} from 'react-router-dom';
import './MovieCard.scss';
import config from '../../config';


const MovieCard = (props) => {
  let history = useHistory();

  const goToDetailedView = (id) => {
    assignMovie().then(() => history.push(`/selected/${id}`))
    
  }



  const assignMovie = async () => {
    await props.assignSelected(props.movie);
  }

  return (
    <div className="movie-card" onClick={() => goToDetailedView(props.movie.id)}>
        <img className='background-image' srcSet={`${config.IMAGE_PATH}/w342${props.movie.poster_path}`} alt="cover" />
        <div className="movie-info">
          <h4>{props.movie.original_title}</h4>
          <p>{props.movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard;