let api = "http://127.0.0.1:8080/";
const fs = require('fs');
const http = require('http');
const { dirname } = require('path');

// const r2 = require("r2");
// const getData = async (api) => {
//     try {
//         const response = await r2(api).text;
//         fs.writeFile(__dirname + "/client_folder/2", response, function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log("The file was saved!");
//         });
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// getData(api)
let d = new Date();
let t = d.getTime()

let k = 0;

for (let i = 0; i < 10; i++) {
    let file = fs.createWriteStream(__dirname + "/client_folder/test" + i);
    let request = http.get(api, function (response) {
        response.pipe(file);
        k++;
        if (k == 10) {
            let a = new Date();
            let b = a.getTime() - t;
            console.log(b)
        }
    });
}