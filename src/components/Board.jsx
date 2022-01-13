import React from "react";
import './Board.css'
import Square from "./Square";
const Board = (props) =>{
    return (
        <div className='board'>
            {
                props.squares.map((square,index) => (
                    <Square
                        key={index}
                        value={square}
                        onClick={ () => props.click(index) }


                    />
                ))
            }
        </div>
    )
}
export default Board;