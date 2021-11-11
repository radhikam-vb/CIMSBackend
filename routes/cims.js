import express from 'express'
const router = express.Router()
import { cimsGet, cimsDel, cimsPost, cimsPatch } from '../controller/cimsController.js'


router.get('/', cimsGet)

router.post('/', cimsPost)

router.delete('/', cimsDel)

router.patch('/', cimsPatch)

export default router