import React, { useState, useEffect } from 'react';
import '../App.scss';
import Hero from '../components/Hero/Hero';
import SelectedItem from '../components/SelectedItem/SelectedItem';
import AboutInfo from '../components/AboutInfo/AboutInfo';

function MainPage(props) {

  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <>
      <Hero />
      <SelectedItem selectedMovie={props.movies[0]}/>
      <AboutInfo/>
    </>
  );
}

export default MainPage;
