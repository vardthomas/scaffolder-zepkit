const fs = require('fs')
const path = require('path')
const readPkgUp = require('read-pkg-up');

const projectRoot = readPkgUp.sync().path.replace("/package.json", "")
const contractBuildDir = `${projectRoot}/../build/contracts`

const contracts = {}

fs.readdir(contractBuildDir, function(err, items) {    
    for (var i=0; i<items.length; i++) {
        const contractName = path.basename(items[i]).replace(".json", "")
        const rawData = fs.readFileSync(path.join(contractBuildDir, items[i]))
        contracts[contractName] = JSON.parse(rawData)
    }
});

module.exports = {
    helpers: {
        fs: fs,
        contracts: contracts
    }
}