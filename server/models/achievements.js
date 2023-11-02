import mongoose from 'mongoose';

const achievementsSchema = mongoose.Schema({
    achievement: {type: String, require: true}
})

export default mongoose.model('Achievements', achievementsSchema);