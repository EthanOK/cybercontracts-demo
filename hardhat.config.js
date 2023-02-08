require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      chainId: 5,
      accounts: [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY2],
    },
    tbsc: {
      url: process.env.TBSC_URL,
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY2],
    },
  },
  etherscan: {
    // BSC_API_KEY ETHERSCAN_API_KEY
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
