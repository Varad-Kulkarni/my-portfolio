import mongoose from 'mongoose'

const experienceSchema = mongoose.Schema({
    title: {type: String, require: true},
    company: {type: String, require: true},
    fromDate: {type: Date, require: true},
    toDate: {type: Date, require: true},
    details: {type: String, require: true}
})

export default mongoose.model('Experience', experienceSchema);