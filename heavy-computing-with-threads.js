const { Worker, isMainThread, parentPort } = require('worker_threads')
var fs = require('fs');
let file = "/server_assets/okay.txt";
if (isMainThread) {
    module.exports = async function timeConsumingOperationOnThreads(raw) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(__filename, {
                workerData: raw
            })
            worker.on('message', resolve)
            worker.on('error', reject)
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`))
                }
            })
        })
    }
} else {
    fs.readFile(__dirname + file, 'utf8', function (err, data) {
        parentPort.postMessage(data);
    })
}