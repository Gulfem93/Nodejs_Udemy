const http = require('http');
const fs = require('fs');

const server = http.createServer((require, response) =>
{
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    if(require.method === 'GET')
    {
        if(require.url === '/')
        {
            response.write("Ana Sayfadasın");
            response.end();
        }
        else if(require.url === '/forms')
        {
            fs.readFile('Forms.html', (err, data) =>
            {
                if(err)
                    throw err;
                response.end(data);
            });
        }
        else if(require.url === '/video')
        {
            fs.readFile('Video.html', (err, data) =>
            {
                if(err)
                    throw err;
                response.end(data);
            });
        }
        else
        {
            response.write("Sayfa Bulunamadı");
        }
    }
    
    
    
});
server.listen(3000);