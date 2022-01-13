import React, {useState} from "react";
import './Game.css'
import Board from "./Board";
import {calculateWinner} from "../helper";
const Game = () =>{
    const [board,setBoard] = useState(Array(9).fill(null));
    const [xIsNext,setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        console.log(index)
    }
    const startNewGame = () => {
        return (
            <button className="newGame" onClick={()=> setBoard(Array(9).fill(null))}> Reset</button>
        )

    }
    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board
                squares={board}
                click={handleClick}
            />
            <p className='gameInfo'>
                {winner? 'WIN  '+ winner : 'MOVE  '+(xIsNext ? 'X' :'O' )}
            </p>
        </div>
    )
}
export default Game;