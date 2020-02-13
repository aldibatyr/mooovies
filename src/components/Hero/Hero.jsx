import React, { useEffect, useState } from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import moviedblogo from '../../assets/moviedblogo.svg'
import config from '../../config';

const Hero = (props) => {

  const [mainFeatured, setMainFeatured] = useState([]);

  useEffect(() => {
    setMainFeatured(props.movies[0]);
  }, [props])

  return (
    <>
      <div className="hero-info-wrapper">
        <h1>DISCOVER NEW MOVIES</h1>
        <div className="subtitle-wrapper">
          <div className="subtitle-text">
            <h3>MADE POSSIBLE THANKS TO <a href="http://themoviedb.org" target="_blank" rel="noopener noreferrer">THEMOVIEDB.ORG</a></h3>
          </div>
          <div className="logo-wrapper">
            <img src={moviedblogo} alt="logo" />
          </div>
        </div>
        <div className="cta-button-wrapper">
          <Link to='/full-list'>
            <button className='cta-button'>
              DISCOVER
            </button>
          </Link>
        </div>
      </div>
        <div className="main-featured">
          {
            mainFeatured ? (
              <>
                <img className='background-image' srcSet={`${config.IMAGE_PATH}/original${mainFeatured.backdrop_path}`} alt="cover" />
              </>
            ) : (
                <p>loading</p>
              )
          }
        </div>
    </>
  )
}

export default Hero;