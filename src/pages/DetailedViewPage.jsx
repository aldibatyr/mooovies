import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { useParams } from 'react-router-dom';
import './DetailedViewPage.scss';
import config from '../config';

const DetailedViewPage = (props) => {

  let { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    let response = await fetch(`${config.API_ENDPOINT}/movie/${id}?api_key=${config.API_KEY}`);
    let data = await response.json()
    setMovie(data)
  }
  useEffectOnce(() => {
    fetchMovie()
  })
  return (
    <div className="detailed-view-page">
      <div className="main-info">
        <div className="image-cover">
          <img src={`${config.IMAGE_PATH}/original${movie.backdrop_path}`} alt="cover" />
        </div>
        <div className="info-wrapper">
          <div className="page-title">
  <h1>{movie.title} + <span>({movie.release_date})</span></h1>
            <span>{movie.tagline}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedViewPage;