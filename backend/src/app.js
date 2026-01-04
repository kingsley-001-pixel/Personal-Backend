import express from "express";

const app = express();

import userRouter from "../src/routes/user.route.js"

app.use(express.json())

app.use("/api/v1/users", userRouter)

export default app;