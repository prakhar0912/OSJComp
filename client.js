let api = "http://186258606d1e.ngrok.io";
const fs = require('fs');
const http = require('http');
const { dirname } = require('path');


let d = new Date();
let t = d.getTime()

let k = 0;

for (let i = 0; i < 1; i++) {
    let file = fs.createWriteStream(__dirname + "/client_folder/test" + i);
    let request = http.get(api, function (response) {
        let arst = response.pipe(file);
        arst.on('finish', () => {
            k++;
            if (k == 10) {
                let a = new Date();
                let b = a.getTime() - t;
                console.log(b)
            }
        })
    });
}