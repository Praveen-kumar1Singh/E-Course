import express from "express";
import { login, signup } from "../controllers/User.controller.js";
import { createContactFeedback } from "../controllers/ContactFeedback.controller.js";
const router = express.Router()
router.post("/signup",signup)
router.post("/login",login)
router.post("/contact",createContactFeedback)

export default router