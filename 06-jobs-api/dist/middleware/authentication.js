import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import UnauthenticatedError from "../errors/unauthenticated.js";
const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthenticatedError("Authentication invalid");
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        throw new UnauthenticatedError("Authentication invalid");
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            throw new UnauthenticatedError("Authentication invalid");
        }
        req.user = { id: user.id, name: user.name };
        next();
    }
    catch (error) {
        throw new UnauthenticatedError("Authentication invalid");
    }
};
export default authenticationMiddleware;
//# sourceMappingURL=authentication.js.map