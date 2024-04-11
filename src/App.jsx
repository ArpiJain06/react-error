import './App.css'
// import Counter from "./Counter.jsx";
// import LikeButton from "./LikeButton.jsx";
// import LudoBoard from "./LudoBoard";
// import ToDoList from "./ToDoList";
import LotteryGame from './LotteryGame';
// import Ticket from './Ticket.jsx';


function App(){
  return(
    <>
      {/* <h1>States in React</h1> */}
      {/* <Counter/> */}
      {/* <LikeButton/> */}
      {/* <LudoBoard/> */}
      {/* <ToDoList/> */}
      <LotteryGame n={2} winningSum={10}/>
      {/* <Ticket ticket={[0,1,2]}/> */}
    </>
  );
}

export default App;