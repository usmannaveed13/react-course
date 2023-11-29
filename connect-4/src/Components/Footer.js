import React from 'react';
import '../Game.css';

export const Footer = ({onClickEvent}) => {
  return (
    <div className='footer panel'>
        <button className='footer-button' onClick={onClickEvent} >New Game</button>
      </div>
  )
}
export default Footer;
