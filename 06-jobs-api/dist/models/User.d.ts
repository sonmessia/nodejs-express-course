import mongoose, { Document } from "mongoose";
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createJWT(): string;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=User.d.ts.map