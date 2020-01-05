import React, { Component } from 'react';
import './index.css'
import TextField from './Components/TextField';
import { View, Todos, Todo } from './Components/view';

class App extends Component<{}, any> {
  constructor(props: Todos) {
    super(props)
    this.state = {
      "todos": [
        {
          "id": 1,
          "title": "Do something",
          "completed": false
        },
        {
          "id": 2,
          "title": "something Done",
          "completed": true
        }
      ]
    }
  }

  addTodo: (todo: string) => void = (todo: string) => {
    let todos = this.state.todos
    let new_todo = {
      "id": todos[todos.length - 1].id + 1,
      "title": todo,
      "completed": false
    }
    this.setState({
      todos: [...todos, new_todo]
    })
  }

  deleteTodo: (id: number) => void = (id: number) => {
    let new_todos = this.state.todos.filter((todo: Todo) => todo.id != id)
    this.setState({
      todos: new_todos
    })
  }

  toogleTodo: (id: number) => void = (id: number) => {
    let new_todos = this.state.todos.map((todo: Todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed
        return todo
      }
    })
    this.setState({
      todo: [...new_todos]
    })
  }

  render() {
    return <div className="main container">
      <h1>Simple Todo App</h1>
      <TextField addTodo={this.addTodo} />
      <br />
      <View todos={this.state.todos} deleteTodo={this.deleteTodo} toogleTodo={this.toogleTodo} />
    </div>;
  }
}

export default App;
