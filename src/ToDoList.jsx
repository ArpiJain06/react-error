import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList(){
    // this array is for the state of the list
    let [Todos, setTodos] =useState([]);
    //this array is for the input box 
    let [NewTodo, setNewToDo] = useState("");
    let addNewTask = ()=>{
         //pass the new to do task in our array
        setTodos((prevTods=>{
            return ([...prevTods, {task: NewTodo, id:uuidv4(), done:false}]);
        }));
        setNewToDo(""); //make the input empty again 
    };
    let updateToDoValue= (event)=>{
        setNewToDo(event.target.value); //makes the new to do value equal to the input of user
    };
    let deleteTodo=(id)=>{
        // makes a new array called copy, with all the todos whose id doesn't match with the id we want to delete
        let copy = Todos.filter((todo)=> todo.id != id);
        // console.log(copy);
        setTodos(copy);
    };
    // 
    let doneTodo=(id)=>{
        setTodos( (prevTodos) =>{
            return prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {
                        ...todo, done:true
                    };
                } 
                else {
                    return todo;
                }
            });
        });
    };
    
    return (
        <>
            <input 
                type="text" 
                placeholder="add a task"
                value={NewTodo}
                onChange={updateToDoValue}
            /> 
            &nbsp;
            <button onClick={addNewTask}>Add</button>
            <br /><br />
            <h1>To-Do List</h1>
            <ul>{
                Todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.done? {textDecorationLine:"line-through"}:{}}>
                            {todo.task}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={()=>
                            deleteTodo(todo.id)}
                        > 
                            Delete
                        </button>
                        <button onClick={()=>
                            doneTodo(todo.id)}
                        >
                            Mark as done
                        </button>
                    </li>
                ))
            }</ul>
        </>
    );
}