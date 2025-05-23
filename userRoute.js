import express from "express";

const userRoute = express.Router();

// get

// post

userRoute.post("/register", (req, res) => {
    const { name } = req.body;
    res.status(200).json({data:`welcome ${name}`})
})

// put

// delete

export default userRoute