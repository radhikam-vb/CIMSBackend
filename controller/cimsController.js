import { Comp } from "../model/compSchema.js"

export const cimsGet = async(req, res)=>{
    const {CompanyUID, CompanyName, PrimaryContact} = req.body

    try {
        const Comps = await Comp.find();
        res.send(Comps)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const cimsPost = async(req, res)=>{
    const {CompanyUID, CompanyName, PrimaryContact} = req.body

    try {
        const newComp = await Comp.create({CompanyUID, CompanyName, PrimaryContact})
        res.json(newComp)
    } catch (err) {
        console.log(err)
    }
}

export const cimsDel = (req, res)=>{
    res.send("Delete record in cims")
}

export const cimsPatch = (req, res)=>{
    res.send("Patch record in cims")
}


