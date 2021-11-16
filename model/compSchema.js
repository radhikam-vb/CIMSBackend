import mongoose from "mongoose"

export const compSchema = new mongoose.Schema({
    Designation: String,
    BrandName: String,
    ClientName: String,
    Domain: String,
    BaseLocation: String,
    CompanyAddress: String,
    Contacts: {
        PrimaryContact: {
            Title: String,
            FirstName: String,
            LastName: String,
            EmailAddress: String,
            ContactNumber: Number,
            OtherContactNumber: Number
        },
        SecondaryContact: {
            Title: String,
            FirstName: String,
            LastName: String,
            EmailAddress: String,
            ContactNumber: Number,
            OtherContactNumber: Number
        },
        TertiaryContact: {
            Title: String,
            FirstName: String,
            LastName: String,
            EmailAddress: String,
            ContactNumber: Number,
            OtherContactNumber: Number
        }
    }
})

export const Comp = mongoose.model('Comp', compSchema)



