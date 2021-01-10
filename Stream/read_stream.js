const fs = require('fs');
const file = 'video.mp4';

let progress = 0;
const readStream = fs.createReadStream(file);
fs.stat(file, (err, data) =>
{
    const total = data.size;
    readStream.on('data', (chunk) =>
    {
        progress += chunk.length;
        console.log(Math.round((100*progress)/total) + "%");
    });
    readStream.on('end', () =>
    {
        console.log("Bitti");
    });
});