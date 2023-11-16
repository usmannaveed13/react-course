import React from 'react';
import '../Game.css';

const onClick = (id) => {
    alert('on click '+ id);
}

const GameCircle = ({id,color,children}) => {
    
    return (
    <div className="gameCircle" style={id % 2 === 0 ? {backgroundColor: 'red'} : {backgroundColor: 'blue'}} onClick={() => onClick(id)}>
         {children}
     </div>
  )
}

export default GameCircle;