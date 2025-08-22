const { readFile, writeFile } = require('fs');
const utils = require('util');

const readFilePromise = utils.promisify(readFile);
const writeFilePromise = utils.promisify(writeFile);


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(result);
//         });
//     });
// }

// getText('./content/first.txt').then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.error(err);
// });

// getText('./content/second.txt').then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.error(err);
// });

const start = async () => {
    try {
        const result1 = await readFilePromise('./content/first.txt', 'utf-8');
        const result2 = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise(
            './content/result.txt', `Here is the result: ${result1}, ${result2}`
        );
        console.log(result1);
        console.log(result2);
    } catch (err) {
        console.error(err);
    }

}

start(); 
