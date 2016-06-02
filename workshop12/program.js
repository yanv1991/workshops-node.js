var http = require('http')
var url = require('url')
var server = http.createServer(function(req, res) {
    var urlParsed = url.parse(req.url, true)
    if (urlParsed.pathname.indexOf("/api/parsetime") > -1) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var date = new Date(urlParsed.query.iso);
        console.log(JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }));
        res.end(JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }));
    }

    if (urlParsed.pathname.indexOf('/api/unixtime') > -1) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var unixtime = Date.parse(urlParsed.query.iso) / 1000;
        var unix = unixtime.toFixed(3).split('.').join('');
        res.end(JSON.stringify({ unixtime: Number(unix) }));
    }

})
server.listen(process.argv[2])


//other solution
/*var http = require('http')
var url = require('url')

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return { unixtime: time.getTime() }
}

var server = http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))
*/
