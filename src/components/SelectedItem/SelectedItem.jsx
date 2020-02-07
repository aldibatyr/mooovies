import React, { useState, useEffect } from 'react';
import './SelectedItem.scss'
import config from '../../config';

const SelectedItem = (props) => {

  const [videoId, setVideoId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const getYTLink = async () => {
    setLoading(true)
    const res = await fetch(`${config.API_ENDPOINT}/movie/${props.selectedMovie.id}/videos?api_key=${config.API_KEY}`)
    await res.json().then(data => console.log(data)).then(data => setVideoId(data.results[0].key)).catch(err => setError(err.message)).finally(() => setLoading(false))
  }

  useEffect(() => {
    if (props.selectedMovie) {
      getYTLink()
    }
  }, [props.selectedMovie])

  return (
    <div className="selected-item">
      <div className="title">
        <span>movie preview</span>
      </div>
      {props.selectedMovie ? (
        <div className="movie-preview-container">
          <div className="movie-trailer-wrapper">
            <iframe 
              src={`https://cors-anywhere.herokuapp.com/https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              title="video"
            />
          </div>
          <div className="movie-info-wrapper">

          </div>
        </div>
      ) : (
          <div className="movie-preview-container">
            Select Your Movie
        </div>
        )}
    </div>
  )
}

export default SelectedItem;