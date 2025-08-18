const path = require('path');

console.log(path.sep); // Outputs the path separator for the current OS

const filePath = path.join('/content', 'subfolder', 'test.txt');

const base = path.basename(filePath);
console.log(base); // Outputs the last portion of the path, e.g., 'test.txt'

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // Outputs the absolute path to the file