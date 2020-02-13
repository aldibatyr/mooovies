import React, { useState, useEffect } from 'react';
import '../App.scss';

import MainView from '../components/MainView/MainView';
import Hero from '../components/Hero/Hero';

function MainPage(props) {


  return (
    <>
      <Hero movies={props.movies}/>
    </>
  );
}

export default MainPage;
