import mongoose from 'mongoose';

const achievementsSchema = mongoose.Schema([String])

export default mongoose.model('Achievements', achievementsSchema);