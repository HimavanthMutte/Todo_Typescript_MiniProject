import { Todo } from "./todoType"

export type PostTodoRequest = {
    title: string,
    description: string
}

export type PutTodoRequest = PostTodoRequest & {id: number}