import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    fromDate: {type: String, require: true},
    toDate: {type: String, require: true},
    details: {type: String, require: true},
    tags: {type: [String], require: true}
})

export default mongoose.model('Project', projectSchema);