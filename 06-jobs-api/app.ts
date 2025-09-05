import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();
const connectDB = await import("./db/connect.js");
const authRouter = await import("./routes/auth.js");
const jobRouter = await import("./routes/job.js");
const notFoundMiddleware = await import("./middleware/not-found.js");
const errorHandlerMiddleware = await import("./middleware/error-handler.js");
const authenticationMiddleware = await import("./middleware/authentication.js");


app.use(express.json());

app.get("/api/v1/", (req: Request, res: Response) => {
  res.send("<h1>Nhiệt liệt chào mừng quý vị đại coder!</h1>");
});

app.use("/api/v1/auth", authRouter.default);
app.use("/api/v1/jobs", authenticationMiddleware.default, jobRouter.default);

app.use(notFoundMiddleware.default);
app.use(errorHandlerMiddleware.default);


const start = async () => {
  try {
    await connectDB.default(process.env.MONGO_URI as string);
    app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
  } catch (error) {
    console.log(error);
  }
};

start();