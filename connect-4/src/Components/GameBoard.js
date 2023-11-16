import React from "react";
import GameCircle from "./GameCircle";


const GameBoard = () => {
    const style = {
         display: 'grid',
         gridTemplateColumns:'1fr 1fr 1fr 1fr' ,
         gridTemplateRows: '1fr 1fr 1fr 1fr',
         padding: 20,
         width: '500px',
         position: 'absolute',
         left: '50%',
         marginLeft: '-250px',
         top: '25%'
        }
    return (
        <div style={style}>
            <GameCircle id={1} color="red">
             </GameCircle>
            <GameCircle id={2} color="blue"> 
            </GameCircle>
            <GameCircle id={3} color="red">
            </GameCircle>
            <GameCircle id={4} color="blue">
            </GameCircle>
            <GameCircle id={5} color="red">
            </GameCircle>
            <GameCircle id={6} color="blue">
            </GameCircle>
            <GameCircle id={7} color="red">   
            </GameCircle>
            <GameCircle id={8} color="blue">
            </GameCircle>
            <GameCircle id={9} color="red">
             </GameCircle>
            <GameCircle id={10} color="blue"> 
            </GameCircle>
            <GameCircle id={11} color="red">
            </GameCircle>
            <GameCircle id={12} color="blue">
            </GameCircle>
            <GameCircle id={13} color="red">
            </GameCircle>
            <GameCircle id={14} color="blue">
            </GameCircle>
            <GameCircle id={15} color="red">   
            </GameCircle>
            <GameCircle id={16} color="blue">
            </GameCircle>
        </div>
    )
}

export default GameBoard;
