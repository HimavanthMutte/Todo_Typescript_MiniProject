import express, {Request, Response} from "express"

import TODOS from "../data.js"

import { GetAllTodos } from "../types/responseType.js"

const todoRouter = express.Router()

todoRouter.get("/",(req:Request,res:Response<GetAllTodos>)=>{
    res.status(200).json({
        items: TODOS,
        length: TODOS.length
    })
})

todoRouter.get("/:id",()=>{})

todoRouter.post("/",()=>{})

todoRouter.delete("/:id",()=>{})

todoRouter.put("/:id",()=>{})

export default todoRouter