import React, { Component } from 'react';
import "./App.css";
import Form from "./Form";
import Todos from "./Todos";


export default class App extends Component {

    state = {
      todos : []    
    }
    

  addTodo = (todo) => {
    if (todo.title.length < 2) {
    } else {
      todo.id = Math.random();
      let todos = this.state.todos;
      todos.push(todo)
      this.setState({todos : todos});
    }
    
    
  }

  removeTodo = (id) => {
    const updatedTodos = this.state.todos.filter( todo => {
        return todo.id !== id
    })

    this.setState({
      todos : updatedTodos
    })
  }


  render() {
    return (
      <div>
        <h2 className="app__heading">To do list app</h2>
        <div className="app__container">
          <Form  addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} removetodo={(id) => this.removeTodo(id)} />
        </div>
         
  
      </div>
    )
  }
}
