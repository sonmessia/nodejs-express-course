import type { Request, Response } from "express";
declare const getAllJobs: (req: Request, res: Response) => Promise<void>;
declare const getJob: (req: Request, res: Response) => Promise<void>;
declare const createJob: (req: Request, res: Response) => Promise<void>;
declare const updateJob: (req: Request, res: Response) => Promise<void>;
declare const deleteJob: (req: Request, res: Response) => Promise<void>;
export { getAllJobs, getJob, createJob, updateJob, deleteJob };
//# sourceMappingURL=jobs.d.ts.map