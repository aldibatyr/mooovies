import React, { useState, useEffect } from 'react';
import '../App.scss';
import Hero from '../components/Hero/Hero';
import SelectedItem from '../components/SelectedItem/SelectedItem';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import CTA from '../components/CTA/CTA';

function MainPage(props) {

  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <>
      <Hero />
      <SelectedItem selectedMovie={props.movies[0]}/>
      <AboutInfo/>
      <CTA backgroundSource={props.movies[1]}/>
    </>
  );
}

export default MainPage;
