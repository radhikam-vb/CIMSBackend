import { Comp } from "../model/compSchema.js"
export const cimsGet = async(req, res)=>{
    //const {designation, brandName, clientName, domain, baselocation, addressLine1, addressLine2, pincode, country, state, district, city, landmark, contacts}=req.body

    try {
        const Comps = await Comp.find();
        res.send(Comps)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const cimsPost = async(req, res)=>{
    const {designation, brandname, clientname, domain, baselocation, addressLine1, addressLine2, pincode, country, state, district, city, landmark, contacts}=req.body

    try {
        const newComp = await Comp.create({designation, brandname, clientname, domain, baselocation, addressLine1, addressLine2, pincode, country, state, district, city, landmark, contacts})
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