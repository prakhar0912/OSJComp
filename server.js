var http = require('http');
const timeConsumingOperationWithThreads = require('./heavy-computing-with-threads')
http.createServer(async (req, res) => {
    let result = await timeConsumingOperationWithThreads();
    res.writeHead(200, { 'Content-Type': 'application/force-download', 'Content-disposition': 'attachment; filename=file.txt' });
    res.end(result);
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
