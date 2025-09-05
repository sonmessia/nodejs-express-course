import CustomAPIError from "./custom-api.js";
declare class UnauthenticatedError extends CustomAPIError {
    statusCode: number;
    constructor(message: string);
}
export default UnauthenticatedError;
//# sourceMappingURL=unauthenticated.d.ts.map