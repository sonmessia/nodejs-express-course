import mongoose, { Document } from "mongoose";
interface IJob extends Document {
    company: string;
    position: string;
    status: "interview" | "declined" | "pending";
    createdBy: mongoose.Types.ObjectId;
    timestamps: true;
}
export declare const Job: mongoose.Model<IJob, {}, {}, {}, mongoose.Document<unknown, {}, IJob, {}, {}> & IJob & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=Job.d.ts.map