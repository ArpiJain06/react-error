import { useState } from "react";
import { newTicket, sum } from "./generateTicket";
import Ticket from "./Ticket.jsx";

export default function LotteryGame(n, winningSum){
    let [ticket, setTicket]=useState(newTicket(n));
    let isWin = sum(ticket)===winningSum;
    let buyTicket=()=>{
        setTicket(newTicket(n));
    };
    return (
        <div>     
            <h1>Try Your Luck! </h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Generate a New Ticket</button>
            <h3> {isWin && "You Won!"}</h3>
        </div>
    );
}