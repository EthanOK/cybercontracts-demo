```
1.
npx hardhat run scripts/deploy-Actions.js --network goerli

2.
npx hardhat run scripts/deploy-CYBER.js --network goerli

3.
npx hardhat run scripts/deploy-RolesAuthority.js --network goerli

4.
npx hardhat run scripts/deploy-Create2Deployer.js --network goerli
npx hardhat run scripts/listen-Create2Deployer.js

5.
npx hardhat run scripts/deploy-CyberEngine.js
npx hardhat verify --network goerli "CyberEngine address"

verified contract:

Successfully verified contract Actions on Etherscan.
https://goerli.etherscan.io/address/0x864878177CE6d3563D6ffb23ED2f11A724E8d2B2#code

Successfully verified contract CYBER on Etherscan.
https://goerli.etherscan.io/address/0x4BEF6a761067ccB98570b925C7f0AEC105f70D3F#code

Successfully verified contract RolesAuthority on Etherscan.
https://goerli.etherscan.io/address/0xf872587987A4ed4ac128a9D660e8634C6917ac1A#code

Successfully verified contract Create2Deployer on Etherscan.
https://goerli.etherscan.io/address/0x13C3f19093A83b7Bce64C225ea1D66Fc01326a85#code

Successfully verified contract CyberEngine on Etherscan.
https://goerli.etherscan.io/address/0x13C3f19093A83b7Bce64C225ea1D66Fc01326a85#code
```
