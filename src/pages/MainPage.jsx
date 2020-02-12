import React, { useState, useEffect } from 'react';
import '../App.scss';

import MainView from '../components/MainView/MainView';

function MainPage(props) {


  return (
    <div className='view-page'>
      <MainView genres={props.genres} movies={props.movies} handleNextPageLoad={props.handleNextPageLoad} handleSearchQuerySet={props.handleSearchQuerySet} fetchFromSearch={props.fetchFromSearch} />
    </div>
  );
}

export default MainPage;
