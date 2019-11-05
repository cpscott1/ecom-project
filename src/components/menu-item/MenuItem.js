import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';
const MenuItem = ({title, imageUrl, size}) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }} className={`${size} menu-item`}>
    <div className="background-image" />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem);
