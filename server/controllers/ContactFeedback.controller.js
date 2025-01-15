import ContactFeedback from '../models/ContactFeedback.model.js'

export const createContactFeedback = async (req,res)=>{
    try {
        const {name,email,details}=req.body
        const contactFeedback = new ContactFeedback({
            name:name,
            email:email,
            message:details
        })
        await contactFeedback.save()
        res.status(201).json({message:"Form submitted successfully"})
    } catch (error) {
        console.log("error:",error)
        res.status(500).json({message:"Internal server error"})
    }
}