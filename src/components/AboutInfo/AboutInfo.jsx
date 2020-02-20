import React from 'react';
import './AboutInfo.scss';

function AboutInfo() {
  return (
    <section className='about-info-section'>
      <div className="section-heading">
        <h1 className="heading">
          <span>
            How It Works?
        </span>
        </h1>
        <span>Let me explain</span>
      </div>
      <div className="main-points-wrapper">
        <div className="main-point-card">
          <h3>Step 1</h3>
          <p>We pull most popular movies from the database on initial load.</p>
        </div>
        <div className="main-point-card">
          <h3>Step 2</h3>
          <p>The data is presented neatly in a list format. Of course, you are free to filter the movies based on your liking.</p>
        </div>
        <div className="main-point-card">
          <h3>Step 3</h3>
          <p>You get to see the trailers for all the movies that you are interested in.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
