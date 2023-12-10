import User from '../models/user.js'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try{
        const existinguser = await User.findOne({ username });
        if(existinguser){
            return res.status(405).json({ message: "User already Exist."})
        }

        const newUser = await User.create({ username: username, email: email, password: password }) 
        res.status(200).json({ result: newUser })
        console.log('signup is successful...')
    } catch(error){
        console.log(error)
        res.status(500).json("Something went worng...")
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existinguser = await User.findOne({ username });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist."})
        }

        const isPasswordCrt = password === existinguser.password
        if(!isPasswordCrt){
            return res.status(400).json({message : "Invalid credentials"})
        }
        res.status(200).json({ result: existinguser })
        console.log('login is successful...')
    } catch (error)  {
        console.log(error)
        res.status(500).json("Something went worng...")
    }
}