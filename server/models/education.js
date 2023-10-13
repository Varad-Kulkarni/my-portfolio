import mongoose from 'mongoose'

const educationSchema = mongoose.Schema({
    institute: {type: String, require: true},
    degree: {type: String, require: true},
    marks: {type: String, require: true},
    fromDate: {type: Date, require: true},
    toDate: {type: Date, require: true}
})

export default mongoose.model('Education', educationSchema);