import React from 'react';

import "./Todos.css"

export default function Todos({todos, removetodo}) {
  const allTodos = todos.length > 0 ?  todos.map(todo => {
    return (
      <div className="todo" key={todo.id}>
        <div className="todo__describtion">
          <h4>{todo.title}</h4>
          <p>{todo.content}</p>
        </div>
        <div className="todo__remove" >
          <i className="fas fa-trash-alt" onClick={() => removetodo(todo.id)}></i>
        </div>
        
      </div> 
    )
  }) : <h3 className="noTodo">Fill your to do list from the previous form</h3>;
    
  
  
  return (
    <div className="todos__container">
     {allTodos}
    </div>
  )
}
