import React from 'react'
import '../Game.css';
import {GAME_STATE_PLAYING,
        GAME_STATE_WIN} from "../Constants";

export const Header = ({gameState,currentPlayer,winPlayer}) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player { currentPlayer } Trun</div>
      case GAME_STATE_WIN:
        return <div>Player { winPlayer } Wins</div> 
    }
  } 

  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
      </div>
  )
}
export default Header;
