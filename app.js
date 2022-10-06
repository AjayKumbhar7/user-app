import express from 'express'
import cors from 'cors'
import { userRouter } from './router/userRouter.js'

const app = express()

app.listen(8080, (error, result) => {
    console.log('Server is running on 8080');
})

app.use(cors())
app.use(express.json())
app.use('/user', userRouter)
