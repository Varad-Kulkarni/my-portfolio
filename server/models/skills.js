import mongoose from 'mongoose'

const skillsSchema = mongoose.Schema({
    skill: {type: String, require: true}
})

export default mongoose.model('Skills', skillsSchema)