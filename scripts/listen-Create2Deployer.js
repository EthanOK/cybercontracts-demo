const { ethers } = require("hardhat");

async function main() {
  // listen Create2Deployer Deployer contract

  const provider = new ethers.providers.JsonRpcProvider(
    process.env.ALCHEMY_GOERLI_URL
  );
  let Create2Deployer = "0x13C3f19093A83b7Bce64C225ea1D66Fc01326a85";
  let abi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "addr",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "Deployed",
      type: "event",
    },
    {
      inputs: [
        { internalType: "bytes", name: "code", type: "bytes" },
        { internalType: "bytes32", name: "salt", type: "bytes32" },
      ],
      name: "deploy",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const contract = new ethers.Contract(Create2Deployer, abi, provider);

  contract.on("Deployed", (addr, salt) => {
    console.log("Deployed address: " + addr);
    console.log("salt: " + salt);
  });
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/listen-Create2Deployer.js
