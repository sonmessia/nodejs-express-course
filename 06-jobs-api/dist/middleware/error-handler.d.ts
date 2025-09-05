import type { Request, Response, NextFunction } from "express";
declare const errorHandlerMiddleware: (err: {
    statusCode?: number;
    message?: string;
    name?: string;
    code?: number;
    errors: Record<string, {
        message: string;
    }>;
    value?: string;
    keyValue: Record<string, unknown>;
}, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export default errorHandlerMiddleware;
//# sourceMappingURL=error-handler.d.ts.map