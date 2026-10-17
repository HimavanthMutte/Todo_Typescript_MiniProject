import express, {Request, Response} from "express"

import TODOS from "../data.js"

import { GetAllTodos, GetTodo, ErrorMsg, PostTodoResponse, DeleteMsg} from "../types/responseType.js"

import { PostTodoRequest, PutTodoRequest } from "../types/requestTypes.js"

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
        if (!todo) throw new Error("Invalid ID Provided")
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

todoRouter.delete("/:id",(req:Request,res:Response<DeleteMsg|ErrorMsg>)=>{
    try {
        const todo = TODOS.find(item=>item.id===(+req.params.id))
        if (!todo) throw new Error("Invalid ID Provided")
        TODOS.splice(TODOS.findIndex(item=>item.id===(+req.params.id)), 1)
        res.status(200).json({
            message: "Deletion Success"
        })
    }
    catch(err) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected Error"
        return res.status(400).json({
            message: errorMsg
        })
    }

})

todoRouter.put("/:id",(req:Request<PutTodoRequest>,res:Response)=>{
    try {
        const itemIndex = TODOS.findIndex(item=>item.id===(+req.params.id))
        if (itemIndex===-1) throw new Error("Invalid ID Provided")
        TODOS[itemIndex] = {
            id: +req.params.id,
            title: req.body.title,
            description: req.body.description
        }
        res.status(200).json({
            message: "Updation Success"
        })
    }
    catch(err) {
        const errorMsg = err instanceof Error ? err.message : "Unexpected Error"
        return res.status(400).json({
            message: errorMsg
        })
    }
})

export default todoRouter