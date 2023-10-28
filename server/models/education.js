import mongoose from 'mongoose'

const educationSchema = mongoose.Schema({
    institute: {type: String, require: true},
    degree: {type: String, require: true},
    marks: {type: String, require: true},
    fromDate: {type: String, require: true},
    toDate: {type: String, require: true}
})

export default mongoose.model('Education', educationSchema);