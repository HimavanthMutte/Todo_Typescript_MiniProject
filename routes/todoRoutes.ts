import express, {Request, Response} from "express"

import TODOS from "../data.js"

import { GetAllTodos, GetTodo, ErrorMsg, PostTodoResponse} from "../types/responseType.js"

import { PostTodoRequest } from "../types/requestTypes.js"

const todoRouter = express.Router()

todoRouter.get("/",(req:Request,res:Response<GetAllTodos>)=>{
    res.status(200).json({
        items: TODOS,
        length: TODOS.length
    })
})

todoRouter.get("/:id",(req:Request,res:Response<GetTodo|ErrorMsg>)=>{
    try {
        const todo = TODOS.find(item=>item.id===(+req.params.id))
        if (!todo) throw new Error("Invalid ID provided")
        return res.status(200).json(todo)
    }
    catch(err) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected Error"
        return res.status(400).json({
            message: errorMsg
        })
    }
})

todoRouter.post("/",(req:Request<PostTodoRequest>,res:Response<PostTodoResponse>)=>{
    const {title,description} = req.body
    const newItem = {
        id: Math.floor(Math.random()*1000),
        title,
        description
    }
    TODOS.push(newItem)
    res.status(201).json(newItem)
})

todoRouter.delete("/:id",()=>{})

todoRouter.put("/:id",()=>{})

export default todoRouter