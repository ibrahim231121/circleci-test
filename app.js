const http = require('http');

http.createServer(function (req, res) {
  res.write('hahah world8'); 
  res.end(); 
}).listen(8080, '0.0.0.0');
