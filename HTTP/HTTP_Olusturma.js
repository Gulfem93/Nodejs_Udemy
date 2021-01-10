const http = require('http');

const server = http.createServer((request, response) =>
{
    response.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    response.write("<b>Benim</b> adım Gülfem");
    response.end();
});
server.listen(300);