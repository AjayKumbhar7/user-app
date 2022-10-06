import express from 'express'
import { createUser, getAllUser } from '../controller/userController.js'
export const userRouter = express.Router()

userRouter.get('/all', getAllUser)
userRouter.post('/create', createUser)
