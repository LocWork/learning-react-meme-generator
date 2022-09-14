import React from 'react';
import TrollFace from '../../images/TrollFace.png';
import './Header.css';
export default function Header() {
  return (
    <div className='header-container'>
      <div className='left-side'>
        <img src={TrollFace} alt='trollfacelogo' />
        <h1 className='header-title'>Meme Generator</h1>
      </div>
      <div className='right-side'>
        <h3>React Course - Project 3</h3>
      </div>
    </div>
  );
}
