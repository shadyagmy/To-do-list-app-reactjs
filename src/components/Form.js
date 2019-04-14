import React, { Component } from 'react';

import "./Form.css"

export default class Form extends Component {

  state = {
    title : "",
    content : ""
  }

  chaneHandler = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
   
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ 
      title : "",
      content : ""
    })
  }


  render() {
    return (
      <div className="app__form">
      <h2 className="app__form__heading">Enter your to do!</h2>
        <form onSubmit={this.submitHandler}>
          <input type="text"
              placeholder="Title"
              id="title"
              onChange={this.chaneHandler}
              value={this.state.title}
              required
              />
          <textarea type="text" style={{height : "100px"}}
            placeholder="Content"
            id="content"
            onChange={this.chaneHandler}
            value={this.state.content}

             />
          <button type="submit">Add</button>

        </form>
        
      </div>
    )
  }
}


