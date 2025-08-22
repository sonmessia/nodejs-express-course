// npm - global command, comes with node
// npx - package runner, comes with npm

// local dependencies - packages that are only needed for a specific project
// npm install <package_name>

// global dependencies - packages that are needed for multiple projects
// npm install -g <package_name>

// package.json - file that keeps track of all dependencies for a project
// created when running npm init, npm init -y, or npm install
// includes metadata about the project and its dependencies
// package-lock.json - file that locks the versions of dependencies for a project


const _ = require('lodash');

const items = [1, [2, [3, 4, [5]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
console.log('Hello World!');