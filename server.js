import express from 'express'
import bodyParser from 'body-parser'
import cimsRouter from './routes/cims.js'

const app = express()

app.use(bodyParser.json())

app.use('/cims', cimsRouter)

app.use('/', (req, res)=>{
    res.send("Home")
})

app.listen(3000, ()=> console.log("Server Started"))