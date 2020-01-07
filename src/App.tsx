import React, { Component } from 'react';
import './index.css'
import TextField from './Components/TextField';
import { View, Todos, Todo } from './Components/view';
import { getTodos, addTodo, deleteTodo } from './utils/Request'

class App extends Component<{}, any> {
  constructor(props: Todos) {
    super(props)
    this.state = {
      "todos": []
    }
  }

  componentDidMount() {
    getTodos().then((resp: Todos) => {
      this.setState({
        todos: resp
      })
    })
  }

  addTodo: (todo: string) => void = (todo: string) => {
    let todos = this.state.todos
    let new_id;
    if (todos.length > 0)
      new_id = todos[todos.length - 1].id + 1
    else
      new_id = 0
    let new_todo = {
      "id": new_id,
      "title": todo,
      "completed": false
    }

    addTodo(new_todo).then((resp: Todo) => {
      this.setState({
        todos: [...todos, resp]
      })
    })
  }

  deleteTodo: (id: number) => void = (id: number) => {
    let new_todos = this.state.todos.filter((todo: Todo) => todo.id != id)
    deleteTodo(id).then((resp: Todos) => {
      this.setState({
        todos: new_todos
      })
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
