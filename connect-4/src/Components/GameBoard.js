import React, {useState} from "react";
import GameCircle from "./GameCircle";
import Header from "./Header";
import '../Game.css';
import Footer from "./Footer";
import { isDraw, isWinner } from "../helper";
import {GAME_STATE_PLAYING,
        NO_PLAYER,
        PLAYER_1,
        PLAYER_2,
        NO_CIRCLE,
        GAME_STATE_WIN,
        GAME_STATE_DRAW} from "../Constants";


const GameBoard = () => {
   const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
   const [currentPalyer, setCurrentPalyer] = useState(PLAYER_1);
   const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
   const [winPlayer,setWinPlayer] = useState(NO_PLAYER);
   console.log(gameBoard);

   const initBoard = () => {
        const cicles = [];

        for (let i = 0; i < NO_CIRCLE; i++) {
            cicles.push(renderCircle(i));
        }
        return cicles;
   } 


   const circleClicked = (id) => {
          console.log('circle clicked:' + id);
          if (gameBoard[id] !== NO_PLAYER) return;
          if (gameState !== GAME_STATE_PLAYING) return;
          
          if (isWinner(gameBoard, id, currentPalyer)) 
          {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPalyer);
          }
          
          if (isDraw(gameBoard, id, currentPalyer)) 
          {
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
          }
          setGameBoard(prev => {
            return prev.map((circle, pos) => {
                 if (pos === id) return currentPalyer;
                 return circle; 
            })
          });

      

          setCurrentPalyer(currentPalyer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

          console.log(gameBoard);
          console.log(currentPalyer);
   }

   const renderCircle = id => {
      return <GameCircle  key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked}/>
   }

    return (
      <>
        <Header gameState={gameState} currentPlayer={currentPalyer} winPlayer={winPlayer}/>
        <div className="gameBoard">
          {initBoard()}
        </div>
       <Footer/>
       </> 
    )
}

export default GameBoard;
