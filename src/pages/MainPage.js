import React from 'react';
import Header from '../components/header/Header';
import Meme from '../components/meme/Meme';
import './MainPage.css';
export default function MainPage() {
  return (
    <div className='mainPage-container'>
      <Header />
      <Meme />
    </div>
  );
}
