import mongoose from "mongoose"

export const compSchema = new mongoose.Schema({
    CompanyUID:'string',
    CompanyName:'string',
    PrimaryContact:'string'
})

export const Comp = mongoose.model('Comp', compSchema)
