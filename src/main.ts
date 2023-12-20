import { config } from "dotenv"
config()

import express from "express"
import { userRouter } from "./routers/users.router"

const app = express()

app.use(express.json());

app.listen(3000, () => {
    console.log("Host: localhost:3000");
})

app.use('/users', userRouter)

app.get("/ping", (req, res) => {
    return res.send("pong");
})












