import express from 'express'
import bodyParser from 'body-parser'
import cimsRouter from './routes/cims.js'
import mongoose from 'mongoose'

const db = "mongodb+srv://dbUser:dbUserPassword@cluster0.4csc4.mongodb.net/ERP?retryWrites=true&w=majority"
mongoose.connect(db).then(() =>
    console.log("Connection Successfull")
).catch((err) => console.log('err'))

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use('/cims', cimsRouter)

app.use('/', (req, res) => {
    res.send("HomePage")
})

app.listen(3000, () => console.log("Server Started"))