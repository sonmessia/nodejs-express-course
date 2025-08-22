const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigFile.txt", { highWaterMark: 90000,
    encoding: "utf-8" });

// default 64kb
// last buffer - remainder
// highWaterMark - control size


stream.on("data", (chunk) => {
    console.log("New chunk received:");
    console.log(chunk);
});
stream.on("error", (err) => {
    console.error("Error occurred:");
    console.error(err);
});