import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import moviedblogo from '../../assets/moviedblogo.svg';

const Hero = () => {


  return (
    <div className="hero">
      <div className="hero-info-wrapper">
        <div className="hero-info">
          <span className='heading'>DISCOVER NEW MOVIES</span>
          <div className="subtitle-wrapper">
            <div className="subtitle-text">
              <span>MADE POSSIBLE THANKS TO <a href="http://themoviedb.org" target="_blank" rel="noopener noreferrer">THEMOVIEDB.ORG</a></span>
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
      </div>
    </div>
  )
}

export default Hero;