import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../models/user.js'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try{
        const existinguser = await User.findOne({ username });
        if(existinguser){
            return res.status(405).json({ message: "User already Exist."})
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await User.create({ username: username, email: email, password: hashedPassword })
        const token = jwt.sign({username: newUser.username, id: newUser._id}, 'test', { expiresIn: '1hr'}) 

        res.status(200).json({ result: newUser, token })
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

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            console.log(password + " | " + existinguser.password)
            console.log('invalid password entered...login attempt failed')
            return res.status(400).json({message : "Invalid credentials"})
        }

        const token = jwt.sign({username: existinguser.username, id: existinguser._id}, 'test', { expiresIn: '1hr'}) 
        res.status(200).json({ result: existinguser, token })
        console.log('login is successful...')
    } catch (error)  {
        console.log(error)
        res.status(500).json("Something went worng...")
    }
}