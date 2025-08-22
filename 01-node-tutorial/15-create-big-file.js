const { writeFileSync } = require('fs');

for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/bigFile.txt', `This is line number ${i}\n`, { flag: 'a' });
}