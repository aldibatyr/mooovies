import React, { useState } from 'react';
import './SearchBar.scss';

export default function(props) {

  const [searchValue, setSearchValue] = useState('')

  const searchMovies = (e) => {
    props.fetchFromSearch(e);
    setSearchValue('');
  }

  const searchValueChange = (e) => {
    setSearchValue(e.target.value);
    props.handleSearchQuerySet(e);
  }

  return (
    <form className="search-bar" onSubmit={(e) => searchMovies(e)}>
      <input 
        type="text" 
        name="search" 
        id="search"
        placeholder="Search a Movie"
        value={searchValue}
        onChange={(e)=>searchValueChange(e)}
        />
    </form>
  )
}