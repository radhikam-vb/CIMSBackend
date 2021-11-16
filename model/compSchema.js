import mongoose from "mongoose"

export const compSchema = new mongoose.Schema({

    CompanyUID: String,
    CompanyName: String,
    PrimaryContact:{
        Title: String,
        FirstName: String,
        LastName: String,
        EmailAddress: String,
        ContactNumbder: Number,
        OtherContactNumber: Number
    },
    SecondaryContact:{
        Title: String,
        FirstName: String,
        LastName: String,
        EmailAddress: String,
        ContactNumbder: Number,
        OtherContactNumber: Number
    },
    TertiaryContact:{
        Title: String,
        FirstName: String,
        LastName: String,
        EmailAddress: String,
        ContactNumbder: Number,
        OtherContactNumber: Number
    }
})

export const Comp = mongoose.model('Comp', compSchema)

    CompanyUID:'string',
    CompanyName:'string',
    PrimaryContact:'string'
})

export const Comp = mongoose.model('Comp', compSchema)

