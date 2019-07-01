const express = require('express')
const mongoose = require('./config/database')
const cors = require('cors')
const app = express()

const contactRouter = require('./app/controllers/contactController')
const userRouter = require('./app/controllers/userController')
// const groupRouter = require('./app/controllers/groupController')
app.use(express.json())
app.use(cors())

const port = 3002

app.use('/contacts', contactRouter)
app.use('/users', userRouter)
// app.use('/groups', groupRouter )
app.listen(port, ()=>{
    console.log('lisenting to port',port)
})

