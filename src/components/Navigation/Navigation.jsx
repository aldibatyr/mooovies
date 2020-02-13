import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import config from '../../config';
import { Link } from 'react-router-dom';
import logo from '../../assets/mooovies2.png';
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
        {/* <div className="sort-options">
          <div>
            <label htmlFor='genre'>Genres</label>
            <select>
              {props.genres.map(genre => {
                return <option key={genre.id}>{genre.name}</option>
              })}
            </select>
          </div>
          <div>
            <label htmlFor='year'>Year</label>
            <select name='year' id='year'>
              {makeYearOptions()}
            </select>
          </div>
          <div>
            <label htmlFor='sort'>
              Sort
          </label>
            <select name="sort" id="sort">
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="popularity.decs">Popularity Descending</option>
            </select>
          </div>
        </div> */}
        <div className="search-wrapper">
          <SearchBar handleSearchQuerySet={props.handleSearchQuerySet} fetchFromSearch={props.fetchFromSearch} />
        </div>
      </div>
    </div>
  )
}

export default Navigation;