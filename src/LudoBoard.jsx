import { useState } from "react";
import "./LudoBoard.css";

export default function LudoBoard (){
    let [Moves, setMoves]= useState({blue:0, yellow:0, green:0, red:0});
    let updateBlue=()=>{
        setMoves((prev)=>{
            return { ...prev, blue: prev.blue+1};
        });
    }
    let updateYellow=()=>{
        setMoves((prev)=>{
            return { ...prev, yellow: prev.yellow+1};
        });
    }
    let updateGreen=()=>{
        setMoves((prev)=>{
            return { ...prev, green: prev.green+1};
        });
    }
    let updateRed=()=>{
        setMoves((prev)=>{
            return { ...prev, red: prev.red+1};
        });
    }
    return (
        <div>
            <h2>Game Begins</h2>
            <div className="board">
                <p>Blue moves = {Moves.blue}</p>
                <button id="B" onClick={updateBlue}>+1</button>
                <p>Yellow moves = {Moves.yellow}</p>
                <button id="Y" onClick={updateYellow}>+1</button>
                <p>Green moves = {Moves.green}</p>
                <button id="G" onClick={updateGreen}>+1</button>
                <p>Red moves = {Moves.red}</p>
                <button id="R" onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}