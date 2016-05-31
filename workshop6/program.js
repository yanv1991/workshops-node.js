var http = require('http');
http.get(process.argv[2], function(res) {
	res.setEncoding('utf-8');
    res.on('data', function(chunk) {
        console.log(chunk);
    });
    res.on('error', function(err){
    	console.error(err);
    });
}).on('error', console.error);
