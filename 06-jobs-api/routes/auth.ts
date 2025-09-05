import express from "express";

const router = express.Router();

const { register, login } = await import("../controllers/auth.js");

router.post("/register", register);
router.post("/login", login);
export default router;