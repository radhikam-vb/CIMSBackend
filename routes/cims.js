import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
const router = express.Router()
import { cimsGet, cimsDel, cimsPost, cimsPatch } from '../controller/cimsController.js'


router.get('/',authenticateToken, cimsGet)

router.post('/', cimsPost)

router.delete('/', cimsDel)

router.patch('/', cimsPatch)

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jsonwebtoken.verify(token, process.env.TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

export default router