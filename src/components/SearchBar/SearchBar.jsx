import React from 'react';
import './SearchBar.scss';

export default function(props) {

  return (
    <form className="search-bar">
      <input 
        type="text" 
        name="search" 
        id="search"
        placeholder="Search a Movie"
        />
    </form>
  )
}