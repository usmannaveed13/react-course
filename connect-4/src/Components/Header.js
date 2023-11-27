import React from 'react'
import '../Game.css';

export const Header = ({player}) => {
  return (
    <div className='panel header'>
        <div className='header-text'>Player {player} Turn</div>
      </div>
  )
}
export default Header;
