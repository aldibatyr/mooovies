import React from 'react'
import userAvatar from '../../assets/user.jpg';
import './UserInfo.scss';

const UserInfo = () => {
  let user = {};
  return (
    <div className="user-info">
      <div className="user-avatar">
        <img src={user.avatar ? (user.avatar) : (userAvatar)} alt="users avatar" />
      </div>
      <div className="user-info-name-and-location">
        <h3>{user.name ? (user.name) : ('Pug')}</h3>
        <p>{user.city ? (user.city) : ('Los Angeles, CA')}</p>
      </div>
    </div>
  )
}

export default UserInfo;