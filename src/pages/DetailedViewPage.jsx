import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { useParams } from 'react-router-dom';
import './DetailedViewPage.scss';
import config from '../config';
import DetailedView from '../components/DetailedView/DetailedView';

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
      <DetailedView movie={movie}/>
    </div>
  )
}

export default DetailedViewPage;