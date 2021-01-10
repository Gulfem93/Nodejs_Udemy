const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) =>
{
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    if(request.method === 'GET')
    {
        if(request.url === '/')
        {
            response.write("sayfadasın");
            response.end();
        }
        else if(request.url === '/iletisim')
        {
            response.write("iletisim sayfasındasın");
            response.end();
        }
        else if('/kose_yazisi')
        {
            fs.readFile('text.txt', (err, data) =>
            {
                if(err)
                    throw err;
                response.end(data.toString());
            });
        }
        else
        {
            response.write("sayfa bulunamadı");
            response.end();
        }
    }
})
server.listen(3000);








