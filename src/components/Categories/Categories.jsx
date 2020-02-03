import React from 'react';
import './Categories.scss';

const Categories = () => {
  const categories = [
    'Movies',
    'TV Series'
  ]
  return (
    <div className="categories">
      <span style={{fontSize: '10px', paddingLeft: '5px'}}>DISCOVER</span>
      {categories.map((category) => {
        return (
          <div key={category.toString()} className="category">
            <div className="button-box">
              <button>
                {category}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Categories;