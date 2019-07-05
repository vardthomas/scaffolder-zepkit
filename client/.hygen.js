const fs = require('fs')
const path = require('path')
const readPkgUp = require('read-pkg-up');
const glob = require('glob')

const clientProjectRoot = readPkgUp.sync().path.replace("/package.json", "")
const contractBuildDir = `${clientProjectRoot}/../build/contracts`

const contracts = {}
fs.readdir(contractBuildDir, function(err, items) {    
    for (var i=0; i<items.length; i++) {
        const contractName = path.basename(items[i]).replace(".json", "")
        const rawData = fs.readFileSync(path.join(contractBuildDir, items[i]))
        contracts[contractName] = JSON.parse(rawData)
    }
});

const networkAddresses = {}

const projectRootDir = path.join(path.resolve(`${clientProjectRoot}/../`),"zos.*.json")
glob(path.join(projectRootDir), function (er, files) {
    files.forEach(function(filepath){
        const fileName = path.parse(filepath).base;
        const networkId = fileName.replace(/\D/g, "");

        const rawData = fs.readFileSync(filepath)
        const networkJson = JSON.parse(rawData)

        Object.keys(contracts).forEach(function(contractName){

            networkAddresses[contractName] = {}

            if(contractName in networkJson.contracts){
                networkAddresses[contractName][networkId] = networkJson.contracts[contractName].address
            }
        })
    });
})

module.exports = {
    helpers: {
        contracts,
        networkAddresses,
        renderMarkup: require('react-dom/server').renderToStaticMarkup,
        ZepScaffolder: require('zep-scaffolder'),
    }
}