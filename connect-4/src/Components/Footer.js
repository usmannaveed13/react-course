import React from 'react';
import '../Game.css';

export const Footer = ({onNewGameClick, onSuggestClick}) => {
  return (
    <div className='footer panel'>
        <button className='footer-button' onClick={onNewGameClick} >New Game</button>
        <button className='footer-button' onClick={onSuggestClick}>suggest</button>
      </div>
  )
}
export default Footer;
