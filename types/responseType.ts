import {Todo} from "./todoType"

export type GetAllTodos = {
    items: Todo[],
    length: number
}

export type GetTodo = Todo