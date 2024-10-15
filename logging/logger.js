const fs = require('fs')
const path = require('path')


function log(params) {
    const timeStamp = new Date().toISOString();
    const filepath = path.join(__dirname, "app.log")

    fs.appendFile(filepath, `${timeStamp} ${params}\n`, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    })
}

module.exports = log