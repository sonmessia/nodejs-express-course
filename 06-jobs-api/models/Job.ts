import mongoose, { Document } from "mongoose";

interface IJob extends Document {
  company: string;
  position: string;
  status: "interview" | "declined" | "pending";
  createdBy: mongoose.Types.ObjectId;
  timestamps: true;
}

const JobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true, maxlength: 50 },
    position: { type: String, required: true, maxlength: 100 },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);
export const Job = mongoose.model<IJob>("Job", JobSchema);
