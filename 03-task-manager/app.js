const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;
const start = async () => {
  try {
    const db = await connectDB(process.env.url);
    console.log(
      `Database is connected. Database name is: ${db.connection.name}`,
    );
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
