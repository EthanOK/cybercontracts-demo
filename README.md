# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
npx hardhat compile
REPORT_GAS=true npx hardhat test
npx hardhat node

npx hardhat run scripts/deploy-Actions.js --network goerli

npx hardhat run scripts/deploy-CYBER.js --network goerli

npx hardhat run scripts/deploy-RolesAuthority.js --network goerli

npx hardhat run scripts/deploy-Create2Deployer.js --network goerli
npx hardhat run scripts/listen-Create2Deployer.js

npx hardhat run scripts/deploy-CyberEngine.js
npx hardhat verify --network goerli "CyberEngine address"

```
