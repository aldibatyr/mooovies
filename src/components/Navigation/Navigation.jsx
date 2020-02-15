import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import config from '../../config';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/mooovies-logo.png';
import './Navigation.scss';

const Navigation = (props) => {


  function makeYearOptions() {
    let years = [];
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
      years.push(i);
    }

    return years.map((year, i) => <option key={i} value={year}>{year}</option>)
  }

  return (
    <div className="navigation-wrapper">
      <div className="logo-box">
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navigation">
        <div className="route-links">
          <Link to='/full-list'>
          <span className='link-text'>POPULAR</span>  
          </Link>
          <Link>
          <span className='link-text'>COLLECTIONS</span>  
          </Link>
          <Link>
          <span className='link-text'>IN THEATERS</span>  
          </Link>
          <Link>
          <span className='link-text'>MY LIST</span>  
          </Link>
        </div>
      </div>
      <div className="search-wrapper">
        <SearchBar handleSearchQuerySet={props.handleSearchQuerySet} fetchFromSearch={props.fetchFromSearch} />
      </div>
    </div>
  )
}

export default Navigation;