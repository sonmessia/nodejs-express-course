import type { Request, Response, NextFunction } from "express";
declare module "express-serve-static-core" {
    interface Request {
        user?: {
            id: string;
            name: string;
        };
    }
}
declare const authenticationMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default authenticationMiddleware;
//# sourceMappingURL=authentication.d.ts.map