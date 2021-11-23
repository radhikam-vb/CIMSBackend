import mongoose from "mongoose"

export const compSchema = new mongoose.Schema({
    designation: {
        type: String,
        required: true
    },
    brandname: {
        type: String,
        required: true
    },
    clientname: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    baselocation: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: String,
    pincode: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    landmark: String,
    contacts: {
        type: Object,
        required: true
    },
})

export const Comp = mongoose.model('Comp', compSchema)
