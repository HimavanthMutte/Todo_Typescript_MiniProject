import express from "express"

import todoRouter from "./routes/todoRoutes.ts"

const app = express() 

app.use("/todos",todoRouter)

app.listen(3000,()=>{
    console.log("Server Started")
})

