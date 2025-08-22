// GLOBAL - NO WINDOW

// __dirname - path to current directory
// __filename - path to current file
// require - function to import modules
// module - represents the current module
// process - provides information about the current Node.js process

console.log("Current directory:", __dirname);
console.log("Current file:", __filename);
console.log("Current module:", module);
console.log("Current process:", process);

setInterval(() => {
    console.log("This will run every second");
}, 1000);