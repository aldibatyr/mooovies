import React from 'react';
import './CTA.scss';
import { Link } from 'react-router-dom';




const CTA = (props) => {

  return (
    <section className='cta-section'  >
      <div className="text-wrapper">
        <div className="heading">
          <h1>READY TO TRY IT OUT?</h1>
        </div>
        <div>
          <Link to='/full-list'>
            <button className="cta-button">
              FIND MOVIES
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA;
