const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) =>
{
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
    if(request.method === 'GET')
    {
        if(request.url === '/')
        {
            response.write('Ana Sayfadasınız');
            response.end();
        }
        else if(request.url === '/video')
        {
            const fs = require('fs');
            const file = 'video.mp4';

            let progress = 0;
            const readStream = fs.createReadStream(file);
            const writeStream = fs.createWriteStream('new1.mp4');

            fs.stat(file, (err, data) =>
            {
                const total = data.size;
                readStream.on('data', (chunk) =>
                {
                    //
                });
                readStream.pipe(writeStream);
                writeStream.on('finish', ()=>
                {
                    response.write(data);
                });
            });
            response.end();
        }
        else
        {
            response.write('Sayfa bulunamadı.');
            response.end();
        }
    }
})
server.listen(3000);