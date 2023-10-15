const http = require('http');

http.createServer(function (req, res) {
  res.write('this is new world'); 
  res.end(); 
}).listen(8080, '0.0.0.0');
