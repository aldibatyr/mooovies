import React, { useState, useEffect } from 'react';
import '../App.scss';

import MainView from '../components/MainView/MainView';
import Hero from '../components/Hero/Hero';
import SelectedItem from '../components/SelectedItem/SelectedItem';

function MainPage(props) {


  return (
    <>
      <Hero />
      <SelectedItem selectedMovie={props.movies[0]}/>
    </>
  );
}

export default MainPage;
