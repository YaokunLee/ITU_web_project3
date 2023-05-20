// index.js
import express from 'express'
import { getUserByName, addOneUser } from './user.controler.js'

export const userRouter = express.Router();

// middleware specific to this route
userRouter.use(express.json())

// route handlers
userRouter.get("/user/:name", getUserByName);
// This method is used to add new user. We use put rather than post simply because
// we allow adding duplicate users.
userRouter.put("/user", addOneUser);