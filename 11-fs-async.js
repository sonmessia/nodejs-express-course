// Fs module (Async)

const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        const second = result;
        writeFile('./content/result.txt',
            `Here is the result: ${first}, ${second}`,
            {flag: 'a'},
            (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Done');
            }
        );
    });
});