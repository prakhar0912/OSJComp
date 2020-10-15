var http = require('http');
const workerpool = require('workerpool');
const pool = workerpool.pool(__dirname + '/myworker.js');

http.createServer(async (req, res) => {
    pool.exec('readFile')
        .then((data) => {
            res.end(data);
        })
        .catch((err) => {
            console.log(err)
        })
}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');

