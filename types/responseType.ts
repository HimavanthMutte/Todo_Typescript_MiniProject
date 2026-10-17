import {Todo} from "./todoType"

export type GetAllTodos = {
    items: Todo[],
    length: number
}

export type GetTodo = Todo

export type ErrorMsg = {
    message: string
}

export type PostTodoResponse = Todo

export type DeleteMsg = {
    message: string
}