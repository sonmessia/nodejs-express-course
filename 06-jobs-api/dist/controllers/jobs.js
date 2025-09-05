import { Job } from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
const getAllJobs = async (req, res) => {
    if (!req.user) {
        throw new BadRequestError("User not found in request");
    }
    const jobs = await Job.find({ createdBy: req.user.id }).sort("createdAt");
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};
const getJob = async (req, res) => {
    if (!req.user) {
        throw new BadRequestError("User not found in request");
    }
    const { user: { id: userId }, params: { id: jobId } } = req;
    const job = await Job.findOne({ _id: jobId, createdBy: userId });
    if (!job) {
        throw new NotFoundError(`No job with id ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ job });
};
const createJob = async (req, res) => {
    if (!req.user) {
        throw new BadRequestError("User not found in request");
    }
    req.body.createdBy = req.user.id;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
};
const updateJob = async (req, res) => {
    if (!req.user) {
        throw new BadRequestError("User not found in request");
    }
    const { user: { id: userId }, params: { id: jobId }, body: { company, position } } = req;
    if (company === "" || position === "") {
        throw new BadRequestError("Company or Position fields cannot be empty");
    }
    const job = await Job.findByIdAndUpdate({ _id: jobId, createdBy: userId }, req.body, { new: true, runValidators: true });
    if (!job) {
        throw new NotFoundError(`No job with id ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ job });
};
const deleteJob = async (req, res) => {
    if (!req.user) {
        throw new BadRequestError("User not found in request");
    }
    const { user: { id: userId }, params: { id: jobId } } = req;
    const job = await Job.findByIdAndDelete({ _id: jobId, createdBy: userId });
    if (!job) {
        throw new NotFoundError(`No job with id ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ job });
};
export { getAllJobs, getJob, createJob, updateJob, deleteJob };
//# sourceMappingURL=jobs.js.map