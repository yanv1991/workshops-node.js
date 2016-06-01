var http = require('http')
var map = require('through2-map')
var fs = require('fs')
var server = http.createServer(function(req, res) {

    /*inStream.pipe(map(function(chunk) {
        return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)

    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)*/

    var req = http.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.')
        })
    });

    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });
    
    req.end();

    var options = {
        method: 'POST'
    };

})
server.listen(process.argv[2])
