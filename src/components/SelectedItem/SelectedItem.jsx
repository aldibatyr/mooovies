import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './SelectedItem.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faStar, faBookmark} from '@fortawesome/free-solid-svg-icons';
import config from '../../config';
import { Link } from 'react-router-dom';

const SelectedItem = (props) => {

  const [videoId, setVideoId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({})

  useEffect(() => {
    setSelected(props.selectedMovie)
    const getYTLink = async () => {
      setLoading(true);
      const res = await fetch(`${config.API_ENDPOINT}/movie/${props.selectedMovie.id}/videos?api_key=${config.API_KEY}`);
      await res.json().then(data => setVideoId(data.results[0].key)).catch(err => setError(err.message)).finally(() => setLoading(false));
    };
    if (props.selectedMovie) {
      getYTLink();
    }
  }, [props.selectedMovie]);

  return (
    <div className="selected-item">
      <div className="title">
        <span>most popular movie of the day</span>
      </div>
      {props.selectedMovie ? (
        <div className="movie-preview-container">
          <div className="movie-trailer-wrapper">
            <div className="movie-preview-box">
              <img src={`${config.IMAGE_PATH}/original/${props.selectedMovie.backdrop_path}`} alt="backdrop"/>
              <div className="video-start-box">
                <a href={`http://youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                  <div></div>
                </a>
              </div>
            </div>
          </div>
          <div className="movie-info-wrapper">
            <div className="movie-main-info">
              <div className="movie-rating">
                <CircularProgressbar 
                  value={props.selectedMovie.vote_average} 
                  maxValue={10} 
                  text={`${props.selectedMovie.vote_average}`}
                  strokeWidth={10}
                  styles={buildStyles({
                    textSize: "36px",
                    textColor: "#ececec",
                    pathColor: "#D1495B"

                  })}
                />
                {/* {props.selectedMovie.vote_average} */}
              </div>
              <div className="movie-title-date">
                <div className="title">
                  <h4>{props.selectedMovie.title}</h4>
                </div>
                <div className="release-date">
                  <em>{props.selectedMovie.release_date}</em>
                </div>
              </div>
            </div>
            <div className="movie-overview">
              <p>{props.selectedMovie.overview}</p>
            </div>
            <div className="selected-item-actions-control">
              <div className="button-wrapper first">
                <button type="submit">
                  <FontAwesomeIcon icon={faHeart} size='2x'/>
                </button>
              </div>
              <div className="button-wrapper">
                <button type="submit">
                  <FontAwesomeIcon icon={faStar} size='2x'/>
                </button>
              </div>
              <div className="button-wrapper">
                <button type="submit">
                  <FontAwesomeIcon icon={faBookmark} size='2x'/>
                </button>
              </div>
              <div className="more-details-wrapper">
                <Link to={`/selected/${props.selectedMovie.id}`}>
                  More Details...
                </Link>
              </div>
            </div>
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