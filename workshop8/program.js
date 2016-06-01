var http = require('http');
var async = require("async");

var urls = process.argv.slice(2, process.argv.length);

function printResults(err, results) {
    if (err)
        throw err
    results.forEach(function(result) {
        console.log(result)
    })
}

function getResponse(url, callback) {

    http.get(url, function(response) {
        var text = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
            text += chunk;
        })
        response.on('end', function() {
            callback(null, text);
        });
        response.on('error', console.error)
    })
};

async.map(urls, getResponse, printResults);

//Other solution
/*var http = require('http')
     var bl = require('bl')
     var results = []
     var count = 0

     function printResults () {
       for (var i = 0; i < 3; i++)
         console.log(results[i])
     }

     function httpGet (index) {
       http.get(process.argv[2 + index], function (response) {
         response.pipe(bl(function (err, data) {
           if (err)
             return console.error(err)

           results[index] = data.toString()
           count++

           if (count == 3)
             printResults()
         }))
       })
     }

     for (var i = 0; i < 3; i++)
       httpGet(i)
*/
