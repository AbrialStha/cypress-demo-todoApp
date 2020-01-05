import axios from './axios'
import { Todo } from '../Components/view'

export function getTodos() {
    return axios.request({
        method: 'get',
        url: "api/todos"
    }).then(resp => resp !== undefined && resp.data)
}

export function addTodo(todo: Todo) {
    return axios.request({
        method: 'post',
        url: 'api/todo'
    }).then(resp => resp !== undefined && resp.data)
}

export function deleteTodo(id: number) {
    return axios.request({
        method: 'delete',
        url: `api/todo/${id}`
    }).then(resp => resp !== undefined && resp.data)
}

export function completeTodo(id: number) {
    return axios.request({
        method: 'PATCH',
        url: `api/todo/complete/${id}`,
    }).then(resp => resp !== undefined && resp.data)
}

export function inCompleteTodo(id: number) {
    return axios.request({
        method: 'PATCH',
        url: `api/todo/incomplete/${id}`,
    }).then(resp => resp !== undefined && resp.data)
}