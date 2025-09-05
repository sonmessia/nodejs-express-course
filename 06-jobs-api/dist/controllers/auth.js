import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(201).json({ user: { name: user.name }, token });
};
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError("Please provide email and password");
    }
    const user = await User.findOne({ email });
    if (!user) {
        throw new UnauthenticatedError("Invalid Credentials");
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid Credentials");
    }
    const token = user.createJWT();
    res.status(200).json({ user: { name: user.name }, token });
};
export { register, login };
//# sourceMappingURL=auth.js.map