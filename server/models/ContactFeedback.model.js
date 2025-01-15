import mongoose from "mongoose";

const contactFeedback = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const ContactFeedback = mongoose.model("contactFeedback",contactFeedback)
export default ContactFeedback;
