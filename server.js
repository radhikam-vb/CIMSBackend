import express from 'express'
import bodyParser from 'body-parser'
import cimsRouter from './routes/cims.js'
import mongoose from 'mongoose'
import jsonwebtoken from 'jsonwebtoken'
import dotenv from "dotenv"
import fetch from "node-fetch"

dotenv.config()

const db = "mongodb+srv://dbUser:dbUserPassword@cluster0.4csc4.mongodb.net/ERP?retryWrites=true&w=majority"
mongoose.connect(db).then(() =>
    console.log("Connection Successfull")
).catch((err) => console.log('err'))

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/cims', cimsRouter)

app.post('/login', (req, res)=>{
    const username = req.body.username
    var user = {name: username}

    if(username == null) user = {name : "Dummy username"}

    const token = jsonwebtoken.sign(user,process.env.TOKEN_SECRET, {expiresIn: '3600s'})
    res.json({ Token: token})

})

app.get('/location', async (req, res)=>{
    const pincode = req.headers.pincode
    const country = req.headers.country
    const url = `https://api.worldpostallocations.com/pincode?postalcode=${pincode}&countrycode=${country}`
    const fetch_res = await fetch(url)
    const data = await fetch_res.json()
    res.json(data) 
})

app.use('/', (req, res) => {
    res.send("HomePage")
})

app.listen(3000, () => console.log("Server Started"))