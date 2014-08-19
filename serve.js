var port = 6547;
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port);
console.log('Browse me on http://localhost:' + port);
