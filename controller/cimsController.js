import { Comp } from "../model/compSchema.js"

export const cimsGet = (req, res)=>{
    res.send("Get record in cims")
}

export const cimsPost = async(req, res)=>{
    const {CompanyUID, CompanyName, PrimaryContact, SecondaryContact, TertiaryContact} = req.body

    try {
        const newComp = await Comp.create({CompanyUID, CompanyName, PrimaryContact, SecondaryContact, TertiaryContact})
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
