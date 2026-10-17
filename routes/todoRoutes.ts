import express from "express"

const todoRouter = express.Router()

todoRouter.get("/",()=>{})

todoRouter.get("/:id",()=>{})

todoRouter.post("/",()=>{})

todoRouter.delete("/:id",()=>{})

todoRouter.put("/:id",()=>{})

export default todoRouter