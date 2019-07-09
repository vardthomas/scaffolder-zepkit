
## scaffolder-zepkit

This is a work-in-progress Zepkit that generates a simple web interface to interact with smart contracts.

## usage

Check out this repository and install all packages
```
git clone https://github.com/vardthomas/scaffolder-zepkit.git

cd scaffolder-zepkit
npm-install
cd client
npm install
```

1. Install [ganache](https://github.com/trufflesuite/ganache-cli) and ensure it's running on port 8545. This is the network we'll use to deploy our smart contract.
2. Install hygen ```npm i -g hygen```. This library is used to generate the React Component files.
3. Install zos ```npm install --global zos```. This library is used to manage our dapp.
4. cd into project root
5. Run ```zos create SendTests``` from the project root to compile example smart contract.
6. Choose ```development``` network when prompted by zos. This should deploy the smart contract and create a network file.
7. ```cd client```
8. run ```hygen zeppelin-contract-ui-generator new SendTests``` This will generate a new component for our smart contract. If asked to overwrite existing file, choose yes.
9. run ```npm run start``` 
10. navigate to [http://localhost:3000/contract/SendTests](http://localhost:3000/contract/SendTest)
11. unlock metamask and ensure you're running on a private network


You should now be able to call methods on the smart contract using the user interface. The SendTests smart contract is a simple example of writing values to the contract and reading them back. You can view inputs and outputs of transactions in the debug console.
