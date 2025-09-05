import CustomAPIError from "./custom-api.js";
declare class NotFoundError extends CustomAPIError {
    statusCode: number;
    constructor(message: string);
}
export default NotFoundError;
//# sourceMappingURL=not-found.d.ts.map