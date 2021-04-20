const fs = require('fs');

module.exports = fs.readFile(pathToTextFile, (err, data) => {
    if (err) throw err;

    console.log(data.toString());
    return data.toString();s
})