const mongoose = require('mongoose')

const landlordReview = new mongoose.Schema({
    landlordName: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    reviewContent: {
        type: String,
        required: true
    },
    tenantName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
    
})
module.exports = mongoose.model("Review", landlordReview)