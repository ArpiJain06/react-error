import { useState } from "react";

export default function Counter(){
    let [count, setcount] = useState(0);

    let increaseCount= ()=>{
        setcount(count+=1);
    }
    return(
        <div>
            <button onClick={increaseCount}>Count ={count}</button>
        </div> 
    );
}