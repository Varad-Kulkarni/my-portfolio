import mongoose from 'mongoose'

const skillsSchema = mongoose.Schema([String])

export default mongoose.model('Skills', skillsSchema)