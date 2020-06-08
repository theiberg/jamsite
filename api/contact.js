const http = require('http');

const server = http.createServer( (req, res) => {
    // Only POST
    if (req.method == 'POST') {
        let body = '';
        req.on('data', data => { body += data });

        req.on('end', () => {
            console.log(body);

            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('success');
        })
    }
} )


server.listen(2222);