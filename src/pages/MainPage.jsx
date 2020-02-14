import React, { useState, useEffect } from 'react';
import '../App.scss';
import Hero from '../components/Hero/Hero';
import SelectedItem from '../components/SelectedItem/SelectedItem';

function MainPage(props) {

  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <>
      <Hero />
      <SelectedItem selectedMovie={props.movies[0]}/>
    </>
  );
}

export default MainPage;
