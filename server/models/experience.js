import mongoose from 'mongoose'

const experienceSchema = mongoose.Schema({
    title: {type: String, require: true},
    company: {type: String, require: true},
    fromDate: {type: String, require: true},
    toDate: {type: String, require: true},
    details: {type: String, require: true}
})

export default mongoose.model('Experience', experienceSchema);