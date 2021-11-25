import express from 'express'
import bodyParser from 'body-parser'
import cimsRouter from './routes/cims.js'
import mongoose from 'mongoose'
import jsonwebtoken from 'jsonwebtoken'
import dotenv from "dotenv"
import fetch from "node-fetch"
import { getCountries } from 'country-state-picker'

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
    
    const location = await fetch_res.json()
    const state = location.result[0].state

        const districts = location.result.reduce(function(result, current) {
            result[current.district] = result[current.district] || [];
            result[current.district].push(current.postalLocation);
            return result;
        }, {})

    const data = new Object({
        state,
        districts
    })
    
    res.json(data)
})

app.get('/countries', async (req, res)=>{
    const countries = getCountries()
    res.json(countries)
})

app.use('/', (req, res) => {
    res.send("HomePage")
})

app.listen(3000, () => console.log("Server Started"))