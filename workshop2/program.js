 var fs = require('fs');
 var path = process.argv[2];
 var lines = 0;
 var content = fs.readFileSync(path).toString();
 lines = content.split('\n');
 console.log(lines.length - 1);
