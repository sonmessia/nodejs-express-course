import CustomAPIError from "./custom-api.js";
declare class BadRequestError extends CustomAPIError {
    statusCode: number;
    constructor(message: string);
}
export default BadRequestError;
//# sourceMappingURL=bad-request.d.ts.map