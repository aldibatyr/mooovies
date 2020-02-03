import React from 'react';
import './Dashboard.scss';
import UserInfo from '../UserInfo/UserInfo';
import Categories from '../Categories/Categories';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <UserInfo/>
      <Categories/>
      <div className="controls">
        <button>
          Sign Out 
        </button>
      </div>
    </div>
  )
}

export default Dashboard;