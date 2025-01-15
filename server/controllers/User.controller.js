import User from "../models/User.model.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })

        }
        const hashPassword = await bcrypt.hash(password, 10)
        const createUser = new User({
            name: name,
            email: email,
            password: hashPassword
        })
        await createUser.save()
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log("error:", error)
        res.status(500).json({ message: "Internal server error" })
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isMatch =await bcrypt.compare(password, user.password)
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" })
        }
        else{
            res.status(200).json({
                message: "Login Successfully", user: {
                    password: user.password,
                    email: user.email,
                    _id: user._id
                }
        }
    )}
    } catch (error) {
        console.log("error:", error.message)
       res.status(500).json({message:"Internal server error"})
        }
}