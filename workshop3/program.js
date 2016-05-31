 var fs = require('fs');
 var path = process.argv[2];
 var lines = 0;
 fs.readFile(path, 'utf8', function(err, data) {
     if (err) throw err;
     lines = data.split('\n');
     console.log(lines.length - 1);
 });
