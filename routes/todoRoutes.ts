import express, {Request, Response} from "express"

import TODOS from "../data.js"

import { GetAllTodos, GetTodo, ErrorMsg} from "../types/responseType.js"

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

todoRouter.post("/",()=>{})

todoRouter.delete("/:id",()=>{})

todoRouter.put("/:id",()=>{})

export default todoRouter