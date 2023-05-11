import React from 'react';
import './main.css';

const Main = ({imageSrc}) => {
  return (
    <div className='Main'>
      <img src={imageSrc} alt='Gallery' className='mainimage' />
      <h1 className='maintitle'>Abstract-i Art Gallery</h1>
    </div>
  );
};

export default Main;
