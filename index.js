import express from "express"
import dotenv from "dotenv"

dotenv.config()
import userRoute from "./userRoute.js"
import cors from "cors"
import connectDB from "./database/connectDB.js"


const app = express()
app.use(express.json())

app.use(cors())

app.use("/api/user",userRoute)

app.get("/", (req, res) => {
    res.status(200).jsn({ Message: "Api change successfully" })
}
)

app.get("/api/heart-beat", (req,res) => {
    res.status(200).json({data:"Heart beat was successfull"})
}
)


app.listen(process.env.PORT, ()=> {
    console.log(`Server running successfully at port ${process.env.PORT}`)
})

connectDB();