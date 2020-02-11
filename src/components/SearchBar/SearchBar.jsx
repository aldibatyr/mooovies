import React from 'react';
import './SearchBar.scss';

export default function(props) {

  return (
    <form className="search-bar" onSubmit={(e) => props.fetchFromSearch(e)}>
      <input 
        type="text" 
        name="search" 
        id="search"
        placeholder="Search a Movie"
        onChange={(e)=>props.handleSearchQuerySet(e)}
        />
    </form>
  )
}