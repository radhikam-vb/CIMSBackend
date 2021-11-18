import express from 'express'
import bodyParser from 'body-parser'
import cimsRouter from './routes/cims.js'
import mongoose from 'mongoose'
import jsonwebtoken from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

const db = "mongodb+srv://dbUser:dbUserPassword@cluster0.4csc4.mongodb.net/ERP?retryWrites=true&w=majority"
mongoose.connect(db).then(() =>
    console.log("Connection Successfull")
).catch((err) => console.log('err'))

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/cims', cimsRouter)

app.get('/login', (req, res)=>{
    //const username = req.body.username
    //const user = {name: username}

    const token = jsonwebtoken.sign({name: "Dummy Username"},process.env.TOKEN_SECRET, {expiresIn: '3600s'})
    res.json({ Token: token})

})

app.use('/', (req, res) => {
    res.send("HomePage")
})

app.listen(3000, () => console.log("Server Started"))