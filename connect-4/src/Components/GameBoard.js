import React, {useState} from "react";
import GameCircle from "./GameCircle";
import Header from "./Header";
import '../Game.css';
import Footer from "./Footer";
import { isWinner } from "../helper";

const NO_CIRCLE = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;


const GameBoard = () => {
   const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
   const [currentPalyer, setCurrentPalyer] = useState(PLAYER_1);

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
          if (isWinner(gameBoard, id, currentPalyer)) 
          {
            console.log("WINNER");
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
        <Header player={currentPalyer}/>
        <div className="gameBoard">
          {initBoard()}
        </div>
       <Footer/>
       </> 
    )
}

export default GameBoard;
