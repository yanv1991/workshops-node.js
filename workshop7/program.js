/*var http = require('http');
http.get(process.argv[2], function(res) {
    res.setEncoding('utf-8');
    var data = '';
    res.on('data', function(chunk) {
        data += chunk;
    });
    res.on('end', function() {
        console.log(data.length);
        console.log(data);
    });
    res.on('error', function(err) {
        console.error(err);
    });
}).on('error', console.error);*/

//OTHER SOLUTION
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(response) {
    response.pipe(bl(function(err, data) {
        if (err)
            return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})
