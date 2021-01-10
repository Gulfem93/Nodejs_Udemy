const http = require('http');
const server = http.createServer((request, response) =>
{
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    if(request.method === 'GET')
    {
        if(request.url === '/')
            response.write("Ana Sayfadasınız");
        else if(request.url === '/iletisim')
            response.write("İletisim sayfasındasınız");
        else
            response.write("Sayfa bulunamadı.");
    }
    response.end();
})
server.listen(3000)