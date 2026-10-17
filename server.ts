import express, {Request,Response,NextFunction} from "express"

import {ErrorMsg} from "./types/responseType.js"

import todoRouter from "./routes/todoRoutes.ts"

const app = express() 

app.use(express.json())

app.use("/todos",todoRouter)

app.use((err: Error,req: Request,res: Response<ErrorMsg>,next: NextFunction)=>{
    res.status(500).json({
        message: err.message
    })
})

app.listen(3000,()=>{
    console.log("Server Started")
})

