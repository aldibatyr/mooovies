import React, {useState, useEffect} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import config from '../../config';
import './Navigation.scss';

const Navigation = (props) => {

  const [genres, setGenres] = useState(props.genres)

  function makeYearOptions() {
    let years = [];
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
      years.push(i);
    }

    return years.map((year, i) => <option key={i} value={year}>{year}</option>)
  }

  return (
    
    <div className="navigation">
      <div className="sort-options">
        <div>
          <label htmlFor='genre'>Genres</label>
          <select>
            {genres.map(genre => {
              return <option key={genre.id}>{genre.name}</option>
            })}
          </select>
        </div>
        <div>
          <label>Year</label>
          <select>
            {makeYearOptions()}
          </select>
        </div>
      </div>
      <div className="search-wrapper">
        <SearchBar/>
      </div>
    </div>
  )
}

export default Navigation;