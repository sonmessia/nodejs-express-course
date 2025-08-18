const os = require('os');

const user = os.userInfo();
console.log(user);

const uptime = os.uptime();
console.log(`The system uptime is ${uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    platform: os.platform(),
    arch: os.arch(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(currentOS);