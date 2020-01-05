import React, { FC } from 'react'

export interface Todo {
    "id": number,
    "title": string,
    "completed": boolean
}

export interface Todos {
    todos: Todo[],
    deleteTodo: (id: number) => void,
    toogleTodo: (id: number) => void
}

export const View: FC<Todos> = ({ todos, deleteTodo, toogleTodo }) => {
    return <table className="table">
        <tbody>
            {
                todos.map(todo => {
                    return (
                        <tr>
                            <td style={{ width: "50px" }}>
                                <input type="checkbox" checked={todo.completed} onClick={() => toogleTodo(todo.id)} />
                            </td>
                            <td style={{ textDecoration: `${todo.completed ? "line-through" : "none"}` }}>
                                {
                                    todo.completed &&
                                    <span>
                                        <span className="badge badge-pill badge-success">completed</span>
                                        &nbsp;
                                    </span>
                                }
                                {todo.title}
                            </td>
                            <td style={{ width: "120px" }}>
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
}