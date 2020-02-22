import React from 'react'
import PropTypes from 'prop-types';
import config from '../../config';
import './DetailedView.scss';



const DetailedView = props => {

  const style = {
    background: `linear-gradient(#00000080, #00000080), url(${config.IMAGE_PATH}/w1280${props.movie.poster_path}) center top no-repeat fixed`,
    backgroundSize: 'cover'
  }

  return (
    <div className="main-info">
      <div className="full-info" style={style}>
        <div className="info-wrapper">
          <div className="image-wrapper">
            <img src={`${config.IMAGE_PATH}/w342${props.movie.poster_path}`} alt="background cover" />
          </div>
          <div className="movie-info">
            <h1>{props.movie.title} </h1>
            <span>{props.movie.tagline}</span>
          </div>
        </div>
      </div>



    </div>
  )
}

DetailedView.propTypes = {
  movie: PropTypes.object
}

export default DetailedView
