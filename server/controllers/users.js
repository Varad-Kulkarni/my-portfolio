import User from '../models/user.js'

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        const allUserDetails = []
        allUsers.forEach(user => {
            allUserDetails.push({ _id: user._id, username: user.username, email: user.email, password: user.password})
        })
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error)
    }
}