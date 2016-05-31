var fs = require('fs');
var path = require('path');
module.exports = function(directory, extension, callback) {
    fs.readdir(directory, function(err, files) {
        if (err) return callback(err);
        files = files.filter(function(file) {
            return path.extname(file) === '.' + extension
        })
        callback(null, files)

    });
};
