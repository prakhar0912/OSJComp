var http = require('http');
// const timeConsumingOperationWithThreads = require('./heavy-computing-with-threads')
var fs = require('fs');
let file = '/server_assets/50mb(Binary)'
http.createServer(async (req, res) => {
    // let result = await timeConsumingOperationWithThreads();
    fs.readFile(__dirname + file, 'utf8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'application/force-download', 'Content-disposition': 'attachment; filename=file.txt' });
        res.end(data);
    })

}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
