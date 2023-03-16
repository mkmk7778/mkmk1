import React from "react";
import TodoItem from "./TodoItem";
function TodoBord(props){
  

    return(
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
    
        </div>
    )
}
export default TodoBord