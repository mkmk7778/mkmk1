import React from "react";
function TodoItem(props){
    return(
        <div className="todo-iteme">
         {props.item}    
        </div>
    )
}
export default TodoItem